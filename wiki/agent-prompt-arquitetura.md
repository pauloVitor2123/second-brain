---
title: Agent Prompt — Lógica em Linguagem Natural
tags: [prompt-engineering, llm, arquitetura]
sources: [referencia-projeto-comercial.md]
created: 2025-01-20
---

## Conceito

O arquivo `agents.md` é a **arquitetura do sistema em linguagem natural**.

Define **4 operações** que o agente sabe executar:

### Operação 1 — Ingestão

Quando arquivo em `/raw` é processado:

1. Extrai conceitos, pessoas, ferramentas, empresas, temas
2. Cria páginas wiki individuais para cada entidade
3. Interlinga com `[[links]]`
4. Atualiza `index.md` e `log.md`
5. Move arquivo para `/raw/processed`

### Operação 2 — Consulta

Pergunta sem prefixo:

1. Lê `index.md` para mapear conteúdo disponível
2. Lê páginas wiki relevantes
3. Responde com base no salvo (cita fontes)
4. Se não houver conteúdo na wiki, responde com conhecimento geral

### Operação 3 — Journal

Prefixo `journal:` ou `diário:`:

1. Lê páginas wiki relevantes
2. Identifica padrões em entradas anteriores
3. Salva entrada estruturada em `/journal/YYYY-MM-DD--titulo.md`
4. Oferece insights e perguntas reflexivas

### Operação 4 — CRM

Prefixo `crm:` ou `contato:`:

1. Extrai: nome, email, empresa, contexto
2. Cria/atualiza `/crm/Nome-Sobrenome.md`
3. Atualiza índice alfabético

## Vantagem desta abordagem

**Mudanças sem código:**

Quer adicionar uma 5ª operação? Edita `agents.md` em linguagem natural.
Sistema se adapta automaticamente sem precisa recompilar nada.

Quer alterar formato de saída? Descreve em `agents.md`.
Próximo processamento já segue a nova lógica.

## Prompt engineering é arquitetura

O `agents.md` é mais importante que o código.
Define o comportamento inteiro do sistema.