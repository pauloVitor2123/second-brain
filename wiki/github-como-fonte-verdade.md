---
title: GitHub como Fonte da Verdade
tags: [arquitetura, github, dados, decisão-técnica]
sources: [referencia-projeto-comercial.md]
created: 2025-01-20
---

## Por que GitHub em vez de pasta local

### O problema com pasta local

```
~/.local/second-brain/     ← Onde está?
C:\Users\Paulo\brain\      ← Cada máquina diferente
/home/user/notes/          ← Formatou a máquina, perdeu tudo
```

Dados acoplados a máquina = risco de perda

## A solução: GitHub como API

Qualquer agente — seja GitHub Actions, bot Telegram, script local — **lê e escreve no mesmo lugar**:

```
GitHub repo (API) ← origem única de verdade

    ↓
    ├── GitHub Actions (processamento automático)
    ├── Claude Code (interface manual)
    ├── Bot Telegram (futuro)
    └── Obsidian (visualização local)
```

### Vantagens

1. **Portabilidade** — trocar de máquina, formatar disco, mesmo assim tudo funciona
2. **Versionamento** — Git mantém histórico completo de mudanças
3. **Escalabilidade** — múltiplos agentes consumindo e produzindo dados
4. **Sem setup** — Obsidian clona repo via `obsidian-git`, sincroniza automaticamente
5. **Acesso remoto** — acessar conhecimento de qualquer dispositivo via GitHub

## Obsidian como visualizador, não armazenador

```
GitHub (armazenamento)
    ↓
obsidian-git (sync automático)
    ↓
Obsidian (visualização + edição local)
    ↓
obsidian-git (push de mudanças)
    ↓
GitHub
```

Obsidian é apenas a **interface de leitura e navegação visual** do conhecimento.
A verdade está no Git.

## Estrutura no repo

```
second-brain/ (GitHub repo privado)
├── raw/                    ← Entrada
├── raw/processed/          ← Arquivo
├── wiki/                   ← Saída primária
├── journal/                ← Entradas pessoais
├── crm/                    ← Contatos
├── index.md                ← Índice geral
├── log.md                  ← Histórico
├── agents.md               ← Lógica do agente
└── .github/workflows/      ← Automação
```

Tudo é `.md` puro — sem dependência de aplicação, sem formatos proprietários.