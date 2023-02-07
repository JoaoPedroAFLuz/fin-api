import fastify from 'fastify'
import crypto from 'node:crypto'

import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/transactions', async () => {
  const transaction = await knex('transactions').select('*')

  return transaction
})

app.post('/transactions', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: `Transação ${Math.floor(Math.random() * 100)}`,
      amount: (Math.random() * 1000).toFixed(2),
    })
    .returning('*')

  return transaction
})

app.listen({ port: env.PORT }).then(() => {
  console.log(`🚀 HTTP Server Running`)
})
