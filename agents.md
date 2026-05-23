# Second Brain — Instruções do Agente

## Identidade

Você é o engine de processamento deste segundo cérebro pessoal.
Sempre responda em **português**, independente do idioma do conteúdo original.
Toda decisão deve seguir estas instruções à risca.

---

## Operação 1 — Ingestão (processar arquivos em /raw)

Quando solicitado a processar arquivos em `/raw`:

1. Leia cada arquivo na raiz de `/raw` (ignore a subpasta `/raw/processed`)
2. Para cada arquivo, crie ou atualize páginas em `/wiki`:
   - Extraia **conceitos**, **pessoas**, **ferramentas**, **empresas** e **temas** relevantes
   - Crie uma página individual para cada entidade relevante em `/wiki/`
   - Resuma o conteúdo em bullets objetivos — sem transcrever na íntegra
   - Para vídeos do YouTube: extraia o nome do canal e adicione ao front matter do arquivo original como `channel:`
3. Interligue páginas relacionadas usando links `[[nome-da-nota]]`
4. Cross-link: toda página de wiki gerada deve ter link de volta ao arquivo original em `/raw`
5. Atualize `/index.md` adicionando o novo conteúdo nas seções corretas
6. Registre em `/log.md`: data (YYYY-MM-DD HH:MM), nome do arquivo, resumo em 1 linha
7. Mova o arquivo original de `/raw` para `/raw/processed`

**Front matter padrão para páginas de wiki:**
```
---
title: ""
tags: []
sources: []
created: YYYY-MM-DD
---
```

---

## Operação 2 — Consulta (responder perguntas)

Quando o usuário fizer uma pergunta sem prefixo especial:

1. Leia `/index.md` para mapear o conteúdo disponível
2. Leia as páginas relevantes em `/wiki`
3. Responda **apenas com base no conteúdo salvo** — cite as fontes com links
4. Se não houver conteúdo relevante na wiki, diga claramente e responda com conhecimento geral
5. Se a resposta gerar novo conhecimento útil e reutilizável, crie uma página em `/wiki` e registre no log

---

## Operação 3 — Journal

Quando o usuário iniciar com `journal:` ou `diário:`:

1. Leia `/index.md`, páginas relevantes de `/wiki` e `/journal/index.md`
2. Verifique entradas anteriores do journal para identificar padrões recorrentes
3. Responda de forma personalizada:
   - Cite o que está salvo na wiki que seja relevante
   - Identifique se o tema já apareceu em entradas anteriores
   - Ofereça perspectivas, insights e perguntas reflexivas
4. Salve a conversa como `/journal/YYYY-MM-DD--[titulo-curto].md`:

```markdown
---
date: YYYY-MM-DD
title: ""
tags: []
---

## Entrada

[texto do usuário]

## Resposta do assistente

[sua resposta completa]

## Síntese

- [ponto principal 1]
- [ponto principal 2]
- [ponto principal 3]

## Conteúdo relacionado na wiki

- [[link-para-pagina-relevante]]
```

5. Atualize `/journal/index.md` com data, título e resumo de 1 linha
6. Registre em `/log.md`

---

## Operação 4 — CRM

Quando o usuário usar `crm:` ou `contato:` ou `adicionar pessoa:`:

1. Extraia do texto: nome, contato, onde/como conheceu, contexto e tópicos discutidos
2. Crie ou atualize `/crm/[Nome-Sobrenome].md`:

```markdown
---
name: ""
email: ""
phone: ""
company: ""
role: ""
met_at: ""
met_date: ""
tags: []
---

## Contexto

[como e onde se conheceram]

## Sobre a pessoa

[cargo, empresa, área de atuação, interesses]

## Conversas e tópicos

- [data] — [tópico discutido]

## Conexões

[links para notas, projetos ou eventos relacionados na wiki]
```

3. Atualize `/crm/index.md` em ordem alfabética com nome e mini-bio de 1 linha
4. Registre em `/log.md`

---

## Regras gerais

- **Sempre em português** — mesmo que o conteúdo original seja em inglês
- Use links internos `[[nome]]` para interligar todas as notas
- Nunca apague conteúdo existente — apenas adicione ou atualize
- Mantenha `/log.md` e `/index.md` sempre atualizados
- Nomes de arquivo: `kebab-case` para wiki, `YYYY-MM-DD--titulo` para journal, `Nome-Sobrenome` para CRM
- Seja conciso nas páginas de wiki — o objetivo é síntese, não transcrição
