---
title: Segunda Brain — Evolução para Produto Comercial
tags: [negócio, produto, escalabilidade]
sources: [referencia-projeto-comercial.md]
created: 2025-01-20
---

## O que aproveitar desta arquitetura

✓ Padrão de LLM como engine de transformação de dados
✓ OpenRouter como proxy (flexibilidade de modelo)
✓ Pipeline serverless (GitHub Actions → Cloud Functions)
✓ `agents.md` como lógica em linguagem natural
✓ Markdown como formato universal

## O que precisa ser construído do zero

### Interface web

- Claude Code não é acessível para usuários não-técnicos
- Tecnologia: **Next.js + Tailwind**
- MVP: upload de documentos, busca, visualização de grafo

### Autenticação multi-tenant

- Cada empresa tem dados isolados
- Tecnologia: **Supabase Auth**
- Suporte para SSO, 2FA, roles

### Banco de dados

- Escala melhor que arquivos `.md`
- Múltiplos usuários simultâneos
- Queries complexas
- Tecnologia: **Postgres** (via Supabase)

### Pipeline como API

- Em vez de GitHub Actions (cron), um endpoint que processa on-demand
- Escalável com requisições de múltiplos usuários
- Tecnologia: **Supabase Edge Functions** ou **Vercel Functions**
- Fallback: hosted no backend Next.js

### Billing e autenticação

- Cobrar por empresa/usuário/volume de tokens
- Rastreamento de uso
- Tecnologia: **Stripe**

### Observabilidade

- Logs de processamento
- Alertas de erro
- Rastreamento de custos
- Tecnologia: **Sentry** + **Datadog**

## Dores de mercado para atacar

### 1. Onboarding de conhecimento

**Problema:** Empresas perdem conhecimento quando pessoa chave sai

**Solução:** Second Brain captura o conhecimento (docs, vídeos, reuniões) e estrutura automaticamente para que qualquer um possa acessar

**Clientes:** Agências, consultoras, startups

### 2. Assistente de vendas contextualizado

**Problema:** Time de vendas não tem acesso ao histórico de cada cliente

**Solução:** CRM alimentado por Second Brain — agente já sabe histórico, pode-se sugerir próximas ações

**Clientes:** Empresas B2B, SaaS

### 3. Base de conhecimento viva para suporte

**Problema:** Base de conhecimento fica desatualizada, suporte responde ad-hoc

**Solução:** Second Brain para suporte — aprende com cada conversa, melhora automático com tempo

**Clientes:** SaaS, produtos com alto volume de suporte

## Validação antes de construir

🚫 **Não construa nada novo antes de:** mostrar o MVP para 3 empresas reais

🚫 **Não escale antes de:** alguém perguntar "quanto custa?" e você ter um número

**Sinais positivos:**
- ✓ "Isso resolveria [nosso problema]"
- ✓ "Quando posso começar a usar?"
- ✓ "Quanto custa?"

**Sinais negativos:**
- ✗ "Interessante, mas como isso me ajuda?"
- ✗ "A gente já faz isso com [ferramenta]"
- ✗ Silêncio após demo

## Roadmap mínimo (3-6 meses)

1. **Mês 1:** Construir interface web + autenticação (Django/Supabase)
2. **Mês 2:** Integrar com pipeline (Claude/OpenRouter)
3. **Mês 3:** Banco de dados + multi-tenant
4. **Mês 4:** Billing (Stripe) + documentação
5. **Mês 5:** Beta privado com 5 clientes
6. **Mês 6:** Ajustes baseados em feedback + soft launch

## Projeção de valor

**Se atingir produto-market fit:**

- Preço: $99-299/mês por usuário ou $499-999/mês por empresa
- Churn estimado: 5-10%/mês inicialmente, depois 2-3%
- CAC (customer acquisition cost): $500-1000
- LTV (lifetime value): $5000-15000

Margin: 80%+ (principalmente custo de API)