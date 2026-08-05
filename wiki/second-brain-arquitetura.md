---
title: Second Brain — Arquitetura e Decisões Técnicas
tags: [sistema, arquitetura, automação, llm]
sources: [referencia-projeto-comercial.md]
created: 2025-01-20
---

## Visão geral

Sistema de processamento de conhecimento pessoal 100% automatizado que transforma conteúdo bruto em wiki estruturada através de LLM e GitHub Actions.

**Stack:** GitHub (repo) + GitHub Actions + Node.js + OpenRouter + Claude Haiku + Obsidian

**Custo total:** ~$1/mês

## Fluxo de dados

```
Web Clipper/Journal/CRM → /raw → GitHub Actions → OpenRouter API → 
Processamento markdown → /wiki + /journal + /crm → Obsidian (visualização)
```

## Componentes principais

- **Captura:** Web Clipper salva artigos e vídeos em `/raw`
- **Processamento:** GitHub Actions executa Node.js com cron horário
- **LLM:** OpenRouter (proxy de modelos) chamando Claude Haiku
- **Armazenamento:** Arquivos `.md` versionados no Git
- **Visualização:** Obsidian renderiza grafo de conexões
- **Interface manual:** Claude Code para journal, CRM e consultas

## Princípio central

O LLM não é um chatbot — é uma **engine de transformação de dados**.
Entra: conteúdo bruto
Sai: conhecimento estruturado e interligado