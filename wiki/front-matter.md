---
title: "Front Matter"
tags: ["conceito", "markdown", "metadados"]
sources: ["Build An AI Second Brain Knowledge Base (Step-By-Step)"]
created: 2026-05-23
---

## O que é

Bloco de metadados no topo de um arquivo markdown (YAML format) que armazena informações estruturadas sobre o arquivo.

## Exemplo

```yaml
---
title: ""
tags: []
sources: []
created: YYYY-MM-DD
---
```

## Uso no segundo cérebro

Cada arquivo markdown tem front matter com:
- `title`: nome do conceito/pessoa/ferramente
- `tags`: categorizações (`pessoa`, `ferramenta`, `conceito`, etc.)
- `sources`: links de volta para arquivos originais que geraram esta nota
- `created`: data de criação
- `channel`: (YouTube videos) nome do canal

## Benefício

Permite estruturação de dados sem quebrar markdown puro. LLMs conseguem ler e atualizar front matter.

## Relacionado

- [[markdown]]
- [[obsidian]]
- [[segundo-cerebro-ia]]