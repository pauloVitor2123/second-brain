---
title: "Entrada de Journal"
tags: ["conceito", "reflexao", "segundo-cerebro"]
sources: ["Build An AI Second Brain Knowledge Base (Step-By-Step)"]
created: 2026-05-23
---

## O que é

Reflexão pessoal/pensamento escrito que é processado pela IA do segundo cérebro.

## Fluxo

1. Usuário escreve entrada de journal (brain dump de pensamentos)
2. Prefixo com `journal:` no chat do Codex
3. IA processa:
   - Lê wiki relacionada
   - Busca padrões em journals anteriores
   - Consulta CRM (conversas relevantes)
   - Responde com insights grounded + contexto
4. Entrada é salva com resposta do assistente
5. Criado arquivo em `/journal/YYYY-MM-DD--titulo.md`
6. Atualizado index de journals
7. Registrado em log.md

## Benefício

Journaling não é isolado — é contextualizado por:
- Conhecimento prévio salvo na wiki
- Padrões de pensamento anteriores
- Relacionamentos (CRM)

## Exemplo de fluxo

Usuário escreve: "Tenho ideias para vídeos mas não faço porque acho que não vai dar view"
IA responde: "Vejo padrão recorrente. Você salvou esses 3 vídeos sobre isso..."

## Relacionado

- [[segundo-cerebro-ia]]
- [[codex]]