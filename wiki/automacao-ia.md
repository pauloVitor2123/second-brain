---
title: "Automação com IA"
tags: ["sistema", "automacao", "ia"]
sources: ["Build An AI Second Brain Knowledge Base (Step-By-Step)"]
created: 2026-05-23
---

## Conceito

Configurar tarefas recorrentes que rodam automaticamente (sem intervenção manual).

## Exemplo: Processamento automático da wiki

Em plataformas como Codex, criar automação:
- **Cadência**: horária, diária, semanal
- **Trigger**: se houver arquivos não-processados em `/raw`
- **Ação**: processar os arquivos seguindo regras do `agents.md`
- **Pós-ação**: fazer commit/push para GitHub

## Benefícios

- Reduz overhead de chamar o chat manualmente
- Conteúdo novo é ingerido continuamente
- Backup automático
- Sistema fica sempre atualizado

## Configuração

Em Codex:
1. Automations → New automation
2. Título, projeto, trabalho local, cadência
3. Prompt com instruções
4. Modelo (recomendado: mais forte disponível)
5. Reasoning mode: high

## Relacionado

- [[segundo-cerebro-ia]]
- [[codex]]
- [[github]]