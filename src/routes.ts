import { FastifyInstance } from 'fastify'
import { radar } from './radar/controllers/radar'

export async function appRoutes(app: FastifyInstance) {
  app.post('/radar', radar)
}
