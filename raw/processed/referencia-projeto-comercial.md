# Referência Técnica — Second Brain para Projeto Comercial

> Este documento resume o que foi construído, como foi construído, as decisões técnicas
> e os aprendizados. Serve como base para um novo projeto voltado a produto comercial.

---

## O que foi construído

Um pipeline de processamento de conhecimento pessoal 100% automatizado, composto por:

- **Captura** — Web Clipper salva artigos e vídeos em `/raw`
- **Processamento** — GitHub Actions chama um LLM via API para transformar conteúdo bruto em wiki estruturada
- **Armazenamento** — Arquivos `.md` em repositório GitHub privado
- **Visualização** — Obsidian lê os arquivos e renderiza o grafo de conexões
- **Interface manual** — Claude Code para journal, CRM e consultas contextualizadas

---

## Arquitetura

```
[ENTRADA]          [PROCESSAMENTO]         [ARMAZENAMENTO]    [VISUALIZAÇÃO]
Web Clipper    →                        →                  →
Journal        →   GitHub Actions       →   GitHub repo    →   Obsidian
CRM            →   + OpenRouter API     →   (arquivos .md) →   Claude Code
```

**Princípio central:** o LLM não é um chatbot — é uma engine de transformação de dados.
Entra conteúdo bruto, sai conhecimento estruturado e interligado.

---

## Stack técnica completa

| Tecnologia | Papel | Custo |
|------------|-------|-------|
| **GitHub** (repo privado) | Armazenamento e fonte da verdade | Grátis |
| **GitHub Actions** | Automação serverless — cron horário | Grátis (2.000 min/mês) |
| **Node.js 20 (ESModules)** | Runtime do script de processamento | Grátis |
| **OpenRouter** | Proxy de LLMs — permite trocar modelo sem mudar código | ~$0,02-0,50/mês |
| **Claude Haiku** (via OpenRouter) | Modelo de processamento de markdown | ~$0,25/MTok input |
| **Claude Code** | Interface manual para journal, CRM e consultas | Incluso no plano Pro |
| **Obsidian** | Visualizador local dos arquivos .md | Grátis |
| **obsidian-git** | Sync automático Obsidian ↔ GitHub | Grátis |
| **Obsidian Web Clipper** | Captura de artigos e transcrições do YouTube | Grátis |

**Custo total do MVP 1:** menos de $1/mês.

---

## Decisões técnicas e justificativas

### Por que GitHub como fonte da verdade (não pasta local)
Qualquer agente — Actions, bot Telegram, script local — lê e escreve no mesmo lugar via API.
O Obsidian vira apenas visualizador. Se trocar de máquina, formatar, ou acessar de outro
dispositivo, tudo continua funcionando.

### Por que GitHub Actions em vez de servidor próprio
GitHub Actions usa modelo serverless: acorda, executa em ~30-60 segundos, dorme.
O cron horário usa ~720 minutos/mês — dentro do free tier de 2.000 minutos.
Um VPS ficaria ligado 24/7 esperando ter algo para fazer.

### Por que OpenRouter em vez da API Anthropic direta
Permite trocar de modelo sem mudar uma linha de código — só muda a variável de ambiente `MODEL`.
Tem fallback automático entre provedores. Hoje Claude Haiku, amanhã Gemini Flash se ficar mais barato.

### Por que Node.js sem dependências
O script usa apenas módulos nativos do Node (`fs`, `path`, `fetch`). Zero `npm install`,
zero `node_modules`, zero dependências para gerenciar. Roda direto no GitHub Actions.

### Por que arquivos `.md` em vez de banco de dados
Obsidian lê `.md` diretamente. Git versiona tudo automaticamente. Qualquer editor abre.
Sem schema, sem migrations, sem setup. Para um sistema de notas pessoal, é a escolha certa.

### Por que `node:test` em vez de Vitest/Jest
O Node 20 tem test runner nativo. Zero dependências, zero configuração, roda igual
no local e no CI. Adicionamos Vitest foi descartado porque quebrava o princípio
de zero dependências sem trazer benefício real para este caso.

### Por que o formato `<<<FILE>>>` em vez de JSON
LLMs cometem erros de formatação JSON com frequência em conteúdo que tem código,
cabeçalhos e listas. Delimitadores customizados são mais robustos e fáceis de parsear
com regex simples.

---

## Arquivos criados e suas funções

```
second-brain/
├── .github/
│   └── workflows/
│       └── process-brain.yml   ← CI/CD: testes → processamento → commit
├── scripts/
│   ├── process.mjs             ← engine do pipeline (getRawFiles, buildContext,
│   │                              callOpenRouter, parseResponse, writeFiles, moveToProcessed)
│   └── process.test.mjs        ← testes unitários de parseResponse com node:test
├── agents.md                   ← system prompt do agente (lógica em linguagem natural)
├── index.md                    ← índice geral (gerado pelo agente)
├── log.md                      ← histórico de operações (gerado pelo agente)
├── raw/                        ← entrada: conteúdo bruto aguardando processamento
│   └── processed/              ← arquivo: conteúdo já processado
├── wiki/                       ← saída: páginas geradas pelo agente
├── journal/                    ← entradas de diário com contexto da wiki
└── crm/                        ← fichas de contatos
```

---

## O que o agente sabe fazer (agents.md)

| Operação | Como acionar | O que faz |
|----------|-------------|-----------|
| **Ingestão** | Arquivo em `/raw` | Processa → gera páginas de wiki → atualiza index e log |
| **Consulta** | Pergunta sem prefixo | Responde com base no conteúdo salvo na wiki |
| **Journal** | `journal:` ou `diário:` | Salva entrada + responde contextualizado na wiki |
| **CRM** | `crm:` ou `contato:` | Cria/atualiza ficha de contato em `/crm` |

---

## CI/CD — como o pipeline funciona

```yaml
# Fluxo do workflow (process-brain.yml)
1. Checkout do repo
2. Setup Node.js 20
3. Rodar testes (node --test scripts/process.test.mjs)
   → Se falhar: pipeline para aqui. Não gasta tokens.
4. Contar arquivos em /raw
   → Se zero: pipeline para aqui. Não gasta tokens.
5. Rodar node scripts/process.mjs
   → Chama OpenRouter → parseia resposta → escreve arquivos
6. git add -A && git commit && git push
   → Usa GITHUB_TOKEN automático via x-access-token na URL remota
```

**Otimização de custo:** os steps 3 e 4 são gratuitos. A API do OpenRouter só é chamada
se os testes passarem E houver arquivos novos em `/raw`.

---

## Problemas encontrados e como foram resolvidos

| Problema | Causa | Solução |
|----------|-------|---------|
| Testes falhavam com `ERR_TEST_FAILURE` | `main()` executava ao importar o módulo e chamava `process.exit(0)` | Guard com `process.argv[1] === fileURLToPath(import.meta.url)` |
| `ENOENT` ao mover arquivo para `/processed` | Pasta `raw/processed/` não existia no repo | `fs.mkdir(PATHS.processed, { recursive: true })` antes do rename |
| `git push` falhava com "could not read Username" | Actions não tinha credencial configurada para HTTPS | `git remote set-url origin https://x-access-token:${GITHUB_TOKEN}@github.com/...` |
| Secret configurado em Environment em vez de Repository | UI do GitHub tem dois lugares para secrets | Adicionado como Repository secret — sem necessidade de declarar `environment:` no workflow |

---

## Para um produto comercial — o que muda

### O que aproveitar desta arquitetura
- O padrão de usar LLM como engine de transformação de dados
- OpenRouter como proxy (flexibilidade de modelo)
- Pipeline serverless (GitHub Actions → qualquer cloud function)
- `agents.md` como lógica em linguagem natural (fácil de ajustar sem código)

### O que precisaria ser construído do zero
| Componente | Por quê | Tecnologia sugerida |
|------------|---------|---------------------|
| Interface web | Claude Code não é acessível para usuários não-técnicos | Next.js + Tailwind |
| Autenticação multi-tenant | Cada empresa tem seus próprios dados isolados | Supabase Auth |
| Banco de dados | Escala melhor que arquivos .md para múltiplos usuários | Postgres (Supabase) |
| Pipeline como API | Em vez de GitHub Actions, um endpoint que processa on-demand | Supabase Edge Functions ou Vercel |
| Billing | Cobrar por empresa/usuário/volume | Stripe |

### Dores reais de mercado para atacar
1. **Onboarding de conhecimento** — empresas perdem o que está na cabeça de quem sai
2. **Assistente de vendas contextualizado** — CRM com IA que aprende com cada conversa
3. **Base de conhecimento viva para suporte** — responde automaticamente com base nos especialistas

### Validação antes de construir
Não construa nada novo antes de mostrar o que você tem para 3 empresas reais.
Se alguém perguntar "quanto custa?" — você tem um negócio.
Se perguntarem "interessante, mas como isso me ajuda?" — refine a proposta.

---

## Aprendizados técnicos chave

1. **LLM como engine de dados, não chatbot** — a virada de chave mais importante deste projeto
2. **Prompt engineering é arquitetura** — o `agents.md` define o comportamento do sistema inteiro em linguagem natural
3. **Rejeite complexidade que não resolve um problema real** — hash MD5, Vitest e servidor próprio foram descartados por isso
4. **Serverless para automações periódicas** — GitHub Actions é mais adequado que VPS para jobs que rodam uma vez por hora
5. **Dados > modelo** — o valor está no conhecimento acumulado, não no LLM usado

---

## Repositório de referência

https://github.com/pauloVitor2123/second-brain
