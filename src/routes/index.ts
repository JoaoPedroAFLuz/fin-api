import { FastifyInstance } from 'fastify'
import { transactionsRoutes } from './transaction.routes'

export async function routes(app: FastifyInstance) {
  app.register(transactionsRoutes, {
    prefix: 'transactions',
  })
}
