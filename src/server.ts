import cookie from '@fastify/cookie'
import fastify from 'fastify'

import { env } from './env'
import { routes } from './routes'

const app = fastify()

app.register(cookie)
app.register(routes)

app.listen({ port: env.PORT }).then(() => {
  console.log(`🚀 HTTP Server Running`)
})
