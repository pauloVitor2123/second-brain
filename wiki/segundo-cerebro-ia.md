---
title: "Segundo Cérebro com IA"
tags: ["sistema", "conhecimento", "wiki", "produtividade"]
sources: ["Build An AI Second Brain Knowledge Base (Step-By-Step)"]
created: 2026-05-23
---

## Conceito

Um sistema de gestão de conhecimento que combina:
- **Wiki/Base de Conhecimento**: armazenamento de conteúdo capturado da web (vídeos, artigos, podcasts, tweets)
- **CRM**: registro de pessoas conhecidas, como/onde se conheceram, detalhes de contato, tópicos discutidos
- **Journal**: reflexões pessoais que são respondidas com base no conhecimento da wiki

## Diferencial

Diferencia-se de simples "caixas de depósito" porque o conteúdo é:
- Processado por IA para extrair conceitos, pessoas, ferramentas, empresas, temas
- Interligado automaticamente (cross-linking)
- Consultável via chat com respostas fundamentadas na wiki própria
- Integrado com journal para reflexão contextualizada

## Arquitetura base

Baseada na proposta de [[Andrej Karpathy]] (LLM Wiki). Três pilares:
1. Wiki com extração de entidades e conceitos
2. CRM de relacionamentos
3. Journal com IA grounded na wiki

## Ferramentas necessárias

- [[Obsidian]]: frontend para organizar markdown
- [[Obsidian Web Clipper]]: captura de web
- [[Codex]]: IDE com chat para processar e consultar
- Automação: processar arquivos em intervalos (horário)
- [[GitHub]]: backup automático

## Fluxo de operação

1. Usuário clipar conteúdo via Obsidian Web Clipper → `/raw`
2. Automação hourly processa arquivos: extrai entidades, cria wiki pages, interlinka
3. Usuário consulta via chat ou escreve journal entries
4. IA responde grounded no conteúdo da wiki + conhecimento geral
5. Automação também faz push para GitHub como backup

## Configuração manual

O arquivo `agents.md` contém as instruções de como o sistema funciona. Pode ser editado para:
- Adicionar novas operações (ex: extrair channel name de YouTube)
- Mudar comportamento de processamento
- Adicionar movimentação automática de arquivos processados

## Benefícios observados

- Informação não fica em "caixas isoladas" — é descoberta quando relevante
- Journal ganha contexto de conhecimento prévio e padrões passados
- CRM conecta pessoas a ideias, empresas, eventos
- Crescimento orgânico da wiki com menos esforço ao longo do tempo (graph view)

## Relacionado

- [[andrej-karpathy]]
- [[obsidian]]
- [[codex]]
- [[automacao-ia]]
- [[gestao-conhecimento]]