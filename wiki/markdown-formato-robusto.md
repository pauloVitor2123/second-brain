---
title: Markdown — Formato Robusto para Conhecimento
tags: [markdown, dados, formato, decisão-técnica]
sources: [referencia-projeto-comercial.md]
created: 2025-01-20
---

## Por que `.md` em vez de banco de dados

### Banco de dados (rejeitado)

❌ Schema necessário
❌ Migrations antes de versionar dados
❌ Setup de servidor
❌ Dependência de aplicação específica
❌ Sem histórico automático
❌ Acoplado a um único editor

### Markdown (escolhido)

✓ Zero schema
✓ Obsidian lê nativamente
✓ Git versiona tudo
✓ Qualquer editor abre
✓ Histórico automático pelo Git
✓ Portável

## Front matter padrão

```yaml
---
title: "Nome da página"
tags: [tag1, tag2]
sources: [arquivo-origem.md]
created: YYYY-MM-DD
---

## Conteúdo aqui

[[link-para-outra-nota]]
```

## Convenções de nomenclatura

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Wiki | kebab-case | `segundo-cerebro-arquitetura.md` |
| Journal | YYYY-MM-DD--titulo | `2025-01-20--reflexao-sobre-conhecimento.md` |
| CRM | Nome-Sobrenome | `Paulo-Vitor.md` |

## Parsing robusto

Delimitadores customizados em vez de JSON:

```
<<<FILE: caminho/arquivo.md>>>
conteúdo completo