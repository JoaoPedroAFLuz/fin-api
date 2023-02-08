import cookie from '@fastify/cookie'
import fastify from 'fastify'

import { routes } from './routes'

export const app = fastify()

app.register(cookie)
app.register(routes)
