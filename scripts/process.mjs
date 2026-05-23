/**
 * process.mjs
 * 
 * Script principal do pipeline do Second Brain.
 * 
 * O que ele faz:
 * 1. Lê todos os arquivos .md em /raw (exceto /raw/processed)
 * 2. Lê o agents.md como system prompt
 * 3. Envia tudo para a API do OpenRouter (Claude Haiku)
 * 4. Parseia a resposta — que contém os arquivos a criar/atualizar
 * 5. Escreve os arquivos no repositório
 * 6. Move os originais para /raw/processed
 * 
 * Por que ESModules (.mjs)?
 * O Node moderno usa import/export em vez de require().
 * O .mjs garante que o Node trate o arquivo como ES Module.
 */

import fs from 'fs/promises'
import path from 'path'
import { existsSync } from 'fs'
import { fileURLToPath } from 'url'

// ─── Configuração ────────────────────────────────────────────────────────────

const VAULT = process.env.VAULT_PATH || '.'
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY

// Modelo padrão: Claude Haiku (barato e eficiente para processar markdown)
// Fallback configurável via env para flexibilidade
const MODEL = process.env.MODEL || 'anthropic/claude-haiku-4-5'

const PATHS = {
  raw:       path.join(VAULT, 'raw'),
  processed: path.join(VAULT, 'raw', 'processed'),
  wiki:      path.join(VAULT, 'wiki'),
  journal:   path.join(VAULT, 'journal'),
  crm:       path.join(VAULT, 'crm'),
  agents:    path.join(VAULT, 'agents.md'),
  index:     path.join(VAULT, 'index.md'),
  log:       path.join(VAULT, 'log.md'),
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Lê todos os arquivos .md na raiz de /raw (não recursivo).
 * Arquivos em /raw/processed são ignorados.
 */
async function getRawFiles() {
  const entries = await fs.readdir(PATHS.raw, { withFileTypes: true })
  return entries
    .filter(e => e.isFile() && e.name.endsWith('.md'))
    .map(e => e.name)
}

/**
 * Monta o contexto completo para enviar ao LLM.
 * Inclui: agents.md (system) + conteúdo de cada arquivo raw (user).
 */
async function buildContext(files) {
  const agentsContent = await fs.readFile(PATHS.agents, 'utf8')

  const filesContent = await Promise.all(
    files.map(async (filename) => {
      const content = await fs.readFile(path.join(PATHS.raw, filename), 'utf8')
      return `### Arquivo: ${filename}\n\n${content}`
    })
  )

  return {
    system: agentsContent,
    user: `Processe os seguintes arquivos da pasta /raw seguindo as instruções do agents.md.

Para cada arquivo processado, retorne os novos arquivos a criar/atualizar no formato abaixo.
É obrigatório usar exatamente este formato para cada arquivo — o script vai parsear por ele:

<<<FILE: caminho/relativo/do/arquivo.md>>>
conteúdo completo do arquivo aqui
<<<END>>>

Arquivos que você deve retornar após processar:
- Páginas de /wiki/ para cada conceito/ferramenta/pessoa extraída
- /index.md atualizado
- /log.md atualizado (append da nova entrada)
- Indique quais arquivos mover para /raw/processed no formato:
<<<MOVE: nome-do-arquivo.md>>>

---

${filesContent.join('\n\n---\n\n')}`,
  }
}

/**
 * Chama a API do OpenRouter.
 * 
 * Por que OpenRouter em vez da API Anthropic direta?
 * OpenRouter é um proxy que permite trocar de modelo sem mudar o código.
 * Se o Haiku estiver caro, basta mudar a env MODEL para outro modelo.
 */
async function callOpenRouter(system, user) {
  if (!OPENROUTER_API_KEY) {
    throw new Error('OPENROUTER_API_KEY não definida. Configure nos secrets do GitHub.')
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://github.com/Jovens-Genios/second-brain',
      'X-Title': 'Second Brain Pipeline',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 8000,
      messages: [
        { role: 'user', content: `${system}\n\n---\n\n${user}` }
      ],
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`OpenRouter API erro ${response.status}: ${error}`)
  }

  const data = await response.json()
  return data.choices[0].message.content
}

/**
 * Parseia a resposta do LLM e extrai os arquivos a criar.
 * 
 * O LLM retorna blocos no formato:
 * <<<FILE: caminho>>>
 * conteúdo
 * <<<END>>>
 */
export function parseResponse(response) {
  const files = []
  const toMove = []

  // Extrair arquivos
  const fileRegex = /<<<FILE:\s*(.+?)>>>\n([\s\S]*?)<<<END>>>/g
  let match
  while ((match = fileRegex.exec(response)) !== null) {
    files.push({
      path: match[1].trim(),
      content: match[2].trim(),
    })
  }

  // Extrair arquivos a mover para /processed
  const moveRegex = /<<<MOVE:\s*(.+?)>>>/g
  while ((match = moveRegex.exec(response)) !== null) {
    toMove.push(match[1].trim())
  }

  return { files, toMove }
}

/**
 * Escreve os arquivos no repositório.
 * Cria diretórios intermediários se necessário.
 */
async function writeFiles(files) {
  for (const file of files) {
    const fullPath = path.join(VAULT, file.path)
    const dir = path.dirname(fullPath)

    await fs.mkdir(dir, { recursive: true })

    // Se o arquivo já existe, faz append no log e sobrescreve nos demais
    await fs.writeFile(fullPath, file.content, 'utf8')
    console.log(`✓ Escrito: ${file.path}`)
  }
}

/**
 * Move arquivos processados de /raw para /raw/processed.
 */
async function moveToProcessed(filenames) {
  await fs.mkdir(PATHS.processed, { recursive: true })

  for (const filename of filenames) {
    const src = path.join(PATHS.raw, filename)
    const dest = path.join(PATHS.processed, filename)

    if (existsSync(src)) {
      await fs.rename(src, dest)
      console.log(`→ Movido para processed: ${filename}`)
    }
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🧠 Second Brain — iniciando processamento...')
  console.log(`📁 Vault: ${path.resolve(VAULT)}`)
  console.log(`🤖 Modelo: ${MODEL}`)

  // 1. Verificar se há arquivos para processar
  const rawFiles = await getRawFiles()

  if (rawFiles.length === 0) {
    console.log('✅ Nenhum arquivo novo em /raw. Nada a processar.')
    process.exit(0)
  }

  console.log(`📄 Arquivos encontrados em /raw: ${rawFiles.join(', ')}`)

  // 2. Montar contexto
  const { system, user } = await buildContext(rawFiles)

  // 3. Chamar o LLM
  console.log('⏳ Chamando OpenRouter...')
  const response = await callOpenRouter(system, user)

  // 4. Parsear resposta
  const { files, toMove } = parseResponse(response)
  console.log(`📝 Arquivos a criar/atualizar: ${files.length}`)
  console.log(`📦 Arquivos a mover: ${toMove.length}`)

  // 5. Escrever arquivos
  await writeFiles(files)

  // 6. Mover processados
  await moveToProcessed(toMove.length > 0 ? toMove : rawFiles)

  console.log('✅ Processamento concluído!')
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch(err => {
    console.error('❌ Erro:', err.message)
    process.exit(1)
  })
}
