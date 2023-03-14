import { FastifyInstance } from 'fastify'
import { RadarController } from './radar/controllers'

const controller = new RadarController()

export async function appRoutes(app: FastifyInstance) {
  app.post('/radar', async (request, reply) => {
    await controller.handle(request, reply)
  })
}
