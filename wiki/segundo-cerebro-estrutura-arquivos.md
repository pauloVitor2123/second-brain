---
title: Second Brain — Estrutura de Arquivos
tags: [sistema, organização]
sources: [referencia-projeto-comercial.md]
created: 2025-01-20
---

## Estrutura completa do repo

```
second-brain/
│
├── .github/
│   └── workflows/
│       └── process-brain.yml     ← CI/CD workflow
│
├── scripts/
│   ├── process.mjs              ← Engine de processamento
│   └── process.test.mjs         ← Testes unitários
│
├── agents.md                    ← System prompt (lógica em linguagem natural)
├── index.md                     ← Índice geral (gerado)
├── log.md                       ← Histórico de ops (gerado)
│
├── raw/                         ← ENTRADA: conteúdo bruto
│   └── processed/               ← ARQUIVO: já processado
│
├── wiki/                        ← SAÍDA: páginas estruturadas
│   ├── conceito-1.md
│   ├── pessoa-2.md
│   ├── ferramenta-3.md
│   └── ...
│
├── journal/                     ← ENTRADAS PESSOAIS: reflexões
│   ├── index.md
│   ├── 2025-01-20--titulo-1.md
│   ├── 2025-01-21--titulo-2.md
│   └── ...
│
└── crm/                         ← CONTATOS: fichas de pessoas
    ├── index.md
    ├── Paulo-Vitor.md
    ├── Maria-Silva.md
    └── ...
```

## Fluxo de dados por pasta

### `/raw` — Entrada

- Web Clipper salva aqui
- GitHub Actions verifica periodicamente
- Quando encontra novo arquivo, processa

### `/wiki` — Saída primária

- Páginas estruturadas
- Interligadas com `[[links]]`
- Uma página por conceito/pessoa/ferramenta
- Cross-linked de volta a `/raw`

### `/journal` — Reflexão contextualizada

- Entradas pessoais com data
- Referencia páginas wiki relevantes
- Identifica padrões em histórico

### `/crm` — Relacionamentos

- Uma página por contato
- Email, telefone, contexto, histórico
- Links para notas wiki relacionadas

## Metadados (Front matter)

Todas as páginas seguem padrão:

```yaml
---
title: ""
tags: []
sources: []
created: YYYY-MM-DD
---
```

Para CRM adicional:
```yaml
name: ""
email: ""
phone: ""
met_at: ""
met_date: ""
```

## Índices gerados

- `index.md` — mapa geral do conhecimento
- `journal/index.md` — lista de entradas por data
- `crm/index.md` — lista de contatos em ordem alfabética
- `log.md` — histórico de operações do sistema