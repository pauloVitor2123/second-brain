---
title: GitHub Actions — Workflow de Processamento
tags: [ci-cd, automação, github, serverless]
sources: [referencia-projeto-comercial.md]
created: 2025-01-20
---

## Pipeline de CI/CD

Arquivo: `.github/workflows/process-brain.yml`

### Sequência de execução

1. **Checkout** — cria workspace do repo
2. **Setup Node.js 20** — runtime para script
3. **Testes** (`node --test scripts/process.test.mjs`)
   - Se falhar: pipeline para aqui (sem chamar API)
4. **Verificação de arquivos** — conta `/raw`
   - Se vazio: pipeline para aqui (sem chamar API)
5. **Processamento** (`node scripts/process.mjs`)
   - Lê `/raw`
   - Chama OpenRouter API
   - Parseia resposta
   - Escreve arquivos em `/wiki`, `/journal`, `/crm`
6. **Commit e push** — Git versionamento automático
   - Usa `GITHUB_TOKEN` via x-access-token

## Otimizações de custo

- Testes e verificações são **grátis** (GitHub Actions)
- OpenRouter API só é chamada se:
  - ✓ Testes passarem
  - ✓ Houver arquivos novos em `/raw`
- GitHub Actions: 2.000 min/mês gratuitos
- Cron horário tipicamente usa ~720 min/mês

## Problemas resolvidos

| Problema | Solução |
|----------|---------|
| Testes falhavam com `ERR_TEST_FAILURE` | Guard com `process.argv[1]` para evitar `process.exit(0)` ao importar |
| Pasta `/raw/processed/` não existia | `fs.mkdir(..., { recursive: true })` antes do rename |
| `git push` falhava sem credencial | Usar `GITHUB_TOKEN` em x-access-token na URL remota |
| Secret em lugar errado na UI | Configurar como Repository Secret (não Environment) |