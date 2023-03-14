import fastify from 'fastify'
import { appRoutes } from './routes'

export const app = fastify({ logger: true })

app.register(appRoutes)
