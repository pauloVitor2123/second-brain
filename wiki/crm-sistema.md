---
title: "CRM (Gestão de Relacionamentos)"
tags: ["conceito", "crm", "pessoas"]
sources: ["Build An AI Second Brain Knowledge Base (Step-By-Step)"]
created: 2026-05-23
---

## O que é

Sistema de gestão de contatos integrado ao segundo cérebro que armazena informações sobre pessoas conhecidas.

## Dados armazenados por contato

- Nome, email, telefone, endereço
- Empresa, cargo/role
- Como/onde se conheceram (met_at, met_date)
- Conversas e tópicos discutidos (com datas)
- Tags e categorias
- Conexões (links para notas, projetos, eventos relacionados)

## Fluxo de uso

1. Usuário conhece alguém em evento/call
2. Prefixo com `crm:` no chat do Codex
3. Compartilha detalhes da pessoa
4. IA cria/atualiza arquivo em `/crm/Nome-Sobrenome.md`
5. Atualiza index de CRM (alfabético)
6. Registra em log.md

## Benefício

Recuperar informações sobre pessoas sem precisar lembrar manualmente:
- "Onde conheci Matthew Berman?"
- "Com quem conversei sobre [tópico]?"
- Conectar pessoas a ideias (ela falou sobre X no evento Y)

## Integração com segundo cérebro

CRM é consultado quando:
- Journaling sobre relacionamentos
- Buscando contatos relacionados a um tópico
- Respondendo perguntas sobre pessoas

## Relacionado

- [[segundo-cerebro-ia]]
- [[codex]]