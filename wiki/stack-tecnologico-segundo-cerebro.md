---
title: Stack Tecnológico — Second Brain
tags: [tecnologia, ferramentas, custo]
sources: [referencia-projeto-comercial.md]
created: 2025-01-20
---

## Componentes e custos

| Tecnologia | Papel | Custo |
|------------|-------|-------|
| **GitHub** (repo privado) | Armazenamento e versionamento | Grátis |
| **GitHub Actions** | CI/CD serverless com cron | Grátis (2.000 min/mês) |
| **Node.js 20** (ESModules) | Runtime do script | Grátis |
| **OpenRouter** | Proxy de LLMs | ~$0,02-0,50/mês |
| **Claude Haiku** | Modelo de processamento | ~$0,25/MTok input |
| **Claude Code** | Interface manual (journal, CRM, consultas) | Incluso no Pro |
| **Obsidian** | Visualizador local | Grátis |
| **obsidian-git** | Sync Obsidian ↔ GitHub | Grátis |
| **Obsidian Web Clipper** | Captura de artigos e vídeos | Grátis |

**Total MVP:** <$1/mês

## Por que cada tecnologia foi escolhida

### GitHub + GitHub Actions
- ✓ Serverless (sem VPS 24/7)
- ✓ Versionamento automático
- ✓ Free tier generoso
- ✓ Integração com Obsidian nativa

### Node.js 20 nativo
- ✓ Zero dependências externas
- ✓ Módulos nativos: fs, path, fetch, test
- ✓ Disponível em qualquer lugar

### OpenRouter
- ✓ Trocar modelo sem mudar código
- ✓ Fallback automático entre provedores
- ✓ Faturamento transparente

### Claude Haiku
- ✓ Barato para volume típico
- ✓ Rápido (otimizado para processamento)
- ✓ Qualidade suficiente para markdown

### Obsidian
- ✓ Editor markdown mais bonito
- ✓ Grafo de notas visualmente útil
- ✓ Sync automático com obsidian-git
- ✓ Alternativas: VSCode, Logseq, Roam

## Escalabilidade de custo

| Cenário | Custo/mês |
|---------|-----------|
| MVP (1 pessoa, 10 artigos/mês) | <$1 |
| Normal (1 pessoa, 50 artigos/mês) | ~$2-3 |
| Heavy (1 pessoa, 200 artigos/mês) | ~$8-10 |
| Equipe (3 pessoas) | ~$6-15 |

Escala linearmente com volume de tokens processados.
GitHub Actions continua grátis até 2.000 min/mês.