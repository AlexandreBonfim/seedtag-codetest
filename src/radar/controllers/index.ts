import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { RadarService } from '../services/RadarService'

export class RadarController {
  private readonly service: RadarService

  constructor() {
    this.service = new RadarService()
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const coordinatesSchema = z.object({
      x: z.number().int(),
      y: z.number().int(),
    })

    const enemiesSchema = z.object({
      type: z.enum(['soldier', 'mech']),
      number: z.number().int().positive(),
    })

    const scanSchema = z.array(
      z.object({
        coordinates: coordinatesSchema,
        allies: z.number().int().nonnegative().optional(),
        enemies: enemiesSchema,
      }),
    )

    const protocolsSchema = z.array(
      z.enum([
        'closest-enemies',
        'furthest-enemies',
        'assist-allies',
        'avoid-crossfire',
        'prioritize-mech',
        'avoid-mech',
      ]),
    )

    const radarBodySchema = z.object({
      protocols: protocolsSchema,
      scan: scanSchema,
    })

    const { protocols, scan } = radarBodySchema.parse(request.body)

    try {
      const response = await this.service.process(protocols, scan)

      reply.status(200).send(response)
    } catch (error) {
      return reply.status(500).send(error)
    }
  }
}
