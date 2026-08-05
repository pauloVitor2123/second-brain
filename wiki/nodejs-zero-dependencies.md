---
title: Node.js — Estratégia de Zero Dependências
tags: [nodejs, arquitetura, decisão-técnica]
sources: [referencia-projeto-comercial.md]
created: 2025-01-20
---

## Por que zero dependências externas

Script de processamento (`scripts/process.mjs`) usa apenas módulos nativos Node.js 20:

- `fs` — leitura/escrita de arquivos
- `path` — manipulação de caminhos
- `fetch` — requisições HTTP (nativa desde Node 18)
- `node:test` — testes (nativa desde Node 18)

### Benefícios

| Benefício | Impacto |
|----------|---------|
| Zero `npm install` | Mais rápido no CI/CD |
| Zero `node_modules` | Sem dependências para gerenciar ou atualizar |
| Zero vulnerabilidades de deps | Menor superfície de ataque |
| Portabilidade | Roda em qualquer Node 20 sem setup |
| Rastreabilidade | 100% do código está no repo |

## Tecnologias rejeitadas

| Tech | Motivo |
|------|--------|
| Vitest / Jest | Não resolve problema real; `node:test` é suficiente |
| Express / Fastify | Não precisa de servidor web |
| TypeScript | JavaScript puro é mais direto para esse escopo |
| Docker | GitHub Actions já é isolado; overhead desnecessário |

## Princípio

**Rejeite complexidade que não resolve um problema real.**

Vitest, TypeScript e Docker parecem "profissionais", mas adicionam:
- Setup complexo
- Tempo de build
- Dependências para manter
- Pontos de falha

Para um script que roda uma vez por hora processando markdown, é overkill.

## Estrutura do script

```
scripts/
├── process.mjs          ← Main logic (400 linhas)
│   ├── getRawFiles()
│   ├── buildContext()
│   ├── callOpenRouter()
│   ├── parseResponse()
│   ├── writeFiles()
│   └── moveToProcessed()
└── process.test.mjs     ← Testes com node:test
    └── test('parseResponse', ...)
```

Roda local: `node scripts/process.mjs`
Roda no CI: `node --test scripts/process.test.mjs`