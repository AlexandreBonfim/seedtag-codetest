import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { applyProtocols } from '../services/applyProtocols'

export async function radar(request: FastifyRequest, reply: FastifyReply) {
  const coordinates = z.object({
    x: z.number(),
    y: z.number(),
  })

  const enemies = z.object({
    type: z.enum(['soldier', 'mech']),
    number: z.number(),
  })

  const scanner = z.object({
    coordinates,
    enemies,
    allies: z.number().optional(),
  })

  const radarBodySchema = z.object({
    protocols: z.array(z.string()).min(1).max(3),
    scan: z.array(scanner),
  })

  const { protocols, scan } = radarBodySchema.parse(request.body)

  try {
    const target = await applyProtocols(protocols, scan)

    reply.status(200).send(target)
  } catch (error) {
    return reply.status(500).send()
  }
}
