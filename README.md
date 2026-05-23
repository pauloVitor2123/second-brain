# 🧠 Second Brain

Sistema pessoal de gestão de conhecimento com IA.

## Estrutura

```
second-brain/
├── .github/workflows/
│   └── process-brain.yml   # GitHub Actions — roda a cada hora
├── scripts/
│   └── process.mjs         # Script Node que chama OpenRouter
├── raw/                    # Conteúdo bruto (web clips, notas)
│   └── processed/          # Movido após processar
├── wiki/                   # Gerado pelo agente
├── journal/                # Entradas de diário
│   └── index.md
├── crm/                    # Contatos
│   └── index.md
├── agents.md               # System prompt do agente (lógica do sistema)
├── index.md                # Catálogo geral
└── log.md                  # Histórico de operações
```

## Como usar

### Adicionar conteúdo à wiki
1. Salve um artigo ou vídeo do YouTube com o Obsidian Web Clipper na pasta `/raw`
2. O GitHub Actions processa automaticamente a cada hora
3. O resultado aparece em `/wiki` e no Obsidian via obsidian-git

### Rodar manualmente
Acesse a aba **Actions** no GitHub e clique em **Run workflow**.

### Journal
No Claude Code, abra o projeto e comece uma mensagem com:
```
journal: [seu texto aqui]
```

### CRM
```
crm: Conheci [nome] hoje no [evento]. [detalhes]
```

## Configuração

### Secrets necessários (GitHub → Settings → Secrets → Actions)
| Secret | Descrição |
|--------|-----------|
| `OPENROUTER_API_KEY` | Sua chave da API do OpenRouter |

### Modelos suportados (via OpenRouter)
| Modelo | Uso | Custo |
|--------|-----|-------|
| `anthropic/claude-haiku-4-5` | Processamento automático | ~$0.25/MTok |
| `anthropic/claude-sonnet-4-5` | Consultas complexas | ~$3/MTok |

## Tecnologias

- **Obsidian** — visualização local das notas
- **GitHub Actions** — automação serverless (grátis)
- **OpenRouter** — proxy de LLMs
- **obsidian-git** — sincronização Obsidian ↔ GitHub
