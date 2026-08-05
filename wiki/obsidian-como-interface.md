---
title: Obsidian — Interface de Visualização
tags: [obsidian, ferramentas, visualização]
sources: [referencia-projeto-comercial.md]
created: 2025-01-20
---

## Papel do Obsidian nesta arquitetura

Obsidian é o **visualizador local** e **editor** dos arquivos markdown armazenados no GitHub.

Não é o armazenador — é a **interface**.

## Configuração

### Plugin: obsidian-git

Sincronização automática bidirecional:

```
GitHub repo
    ↓ (pull automático)
Obsidian vault local
    ↓ (commit automático)
GitHub repo
```

Sem precisa fazer `git pull` manualmente.

### Web Clipper

Captura de conteúdo da web diretamente em `/raw`:

- Artigos → `/raw/artigo-url.md`
- Vídeos YouTube → `/raw/video-nome-canal.md` (inclui transcrição)
- Tweets → `/raw/tweet-autor.md`

Próximo passo automático: GitHub Actions processa o arquivo.

## Benefícios como interface

1. **Grafo de notas** — visualização das interconexões
2. **Busca full-text** — encontra qualquer coisa rapidamente
3. **Backlinks** — vê quais notas linkam para a atual
4. **Canvas** — visualiza fluxos de pensamento
5. **Sync automático** — não precisa gerir Git manualmente

## Obsidian não é obrigatório

A fonte da verdade é GitHub. Qualquer ferramenta que leia `.md` funciona:

- VSCode + Markdown Preview
- iCloud Notes
- Notion (importar)
- Roam Research
- Logseq

Obsidian é apenas a escolha visual mais bonita.