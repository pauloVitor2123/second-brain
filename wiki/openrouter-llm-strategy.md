---
title: OpenRouter — Estratégia de Modelos LLM
tags: [llm, api, custo, arquitetura]
sources: [referencia-projeto-comercial.md]
created: 2025-01-20
---

## Por que OpenRouter em vez de API direta

OpenRouter é um **proxy de LLMs** que permite:

### Flexibilidade
- Trocar de modelo sem mudar código
- Basta alterar variável de ambiente `MODEL`
- Hoje: Claude Haiku
- Amanhã: Gemini Flash, Llama, etc.

### Economia
- Compara preços em tempo real entre provedores
- Fallback automático se um provedor cair
- Faturamento por token consumido

### Operação no GitHub Actions
- Uma única chave de API
- Sem complexidade adicional
- Chamada simples via `fetch()`

## Modelo escolhido: Claude Haiku

- Custo: ~$0,25 por milhão de tokens de input
- Velocidade: Otimizado para processamento rápido
- Qualidade: Suficiente para transformação markdown
- Custo estimado do MVP 1: ~$0,02-0,50/mês

## Padrão de chamada

```javascript
const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${OPENROUTER_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: process.env.MODEL || 'anthropic/claude-3.5-haiku',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
  }),
});
```

## Custo total esperado

- GitHub Actions: Grátis (dentro free tier)
- OpenRouter: ~$1/mês para volume típico
- **Total:** <$2/mês