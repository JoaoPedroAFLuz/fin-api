import { FastifyInstance } from 'fastify'
import crypto from 'node:crypto'

import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
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
}
