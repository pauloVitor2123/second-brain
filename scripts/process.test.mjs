import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseResponse } from './process.mjs'

test('extrai um FILE e um MOVE corretamente', () => {
  const input = `<<<FILE: wiki/clean-arch.md>>>
conteúdo da página
<<<END>>>
<<<MOVE: artigo.md>>>`

  const { files, toMove } = parseResponse(input)

  assert.equal(files.length, 1)
  assert.equal(files[0].path, 'wiki/clean-arch.md')
  assert.equal(files[0].content, 'conteúdo da página')
  assert.deepEqual(toMove, ['artigo.md'])
})

test('extrai múltiplos FILEs e MOVEs', () => {
  const input = `<<<FILE: wiki/conceito-a.md>>>
conteúdo a
<<<END>>>
<<<FILE: wiki/conceito-b.md>>>
conteúdo b
<<<END>>>
<<<MOVE: raw1.md>>>
<<<MOVE: raw2.md>>>`

  const { files, toMove } = parseResponse(input)

  assert.equal(files.length, 2)
  assert.equal(files[0].path, 'wiki/conceito-a.md')
  assert.equal(files[1].path, 'wiki/conceito-b.md')
  assert.deepEqual(toMove, ['raw1.md', 'raw2.md'])
})

test('retorna arrays vazios quando não há blocos', () => {
  const { files, toMove } = parseResponse('resposta sem formato esperado')

  assert.deepEqual(files, [])
  assert.deepEqual(toMove, [])
})

test('preserva conteúdo com markdown complexo dentro do bloco FILE', () => {
  const input = `<<<FILE: wiki/nota.md>>>
---
title: "Teste"
tags: [a, b]
---

## Seção

- item 1
- item 2

[[link-interno]]
<<<END>>>
<<<MOVE: nota-original.md>>>`

  const { files, toMove } = parseResponse(input)

  assert.equal(files.length, 1)
  assert(files[0].content.includes('[[link-interno]]'))
  assert(files[0].content.includes('tags: [a, b]'))
  assert.deepEqual(toMove, ['nota-original.md'])
})
