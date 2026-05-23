---
title: "Codex"
tags: ["ferramenta", "ide", "ia", "processamento"]
sources: ["Build An AI Second Brain Knowledge Base (Step-By-Step)"]
created: 2026-05-23
---

## O que é

IDE (Integrated Development Environment) com integração de chat IA. Usado para criar, processar e consultar sistemas como o segundo cérebro.

## Características

- Editor de código/texto com chat integrado
- Suporte a projetos locais
- Processamento de arquivos via prompts
- Automações recorrentes (hourly, daily, etc.)
- Integração com GitHub para versionamento
- Suporte a diferentes modelos (GPT-4.5, GPT-5.5)
- Reasoning modes (pode ser configurado para high reasoning)

## Uso no segundo cérebro

- **Processamento**: ler arquivos em `/raw`, extrair entidades, criar wiki pages
- **Chat/Query**: consultar a wiki com respostas fundamentadas
- **Journal**: processar entradas de diário respondendo com contexto da wiki
- **CRM**: adicionar/atualizar contatos
- **Automação**: horária (processa raw files, faz commit no GitHub)

## Fluxo típico

```
1. Novo chat com projeto "segundo-cerebro"
2. Prompt: instruções sobre o que fazer
3. Codex processa (lê wiki, cria notas, atualiza log/index)
4. Outputs: novos arquivos markdown no vault
```

## Alternativas mencionadas

- Claude (Anthropic) code também funciona
- Qualquer plataforma chat-based pode servir como frontend

## Relacionado

- [[segundo-cerebro-ia]]
- [[obsidian]]
- [[automacao-ia]]
- [[andrej-karpathy]]