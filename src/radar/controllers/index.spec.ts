import request from 'supertest'
import { expect, describe, it, afterAll, beforeAll } from '@jest/globals'
import { app } from '../../app'

describe('RadarController', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should return valid response for valid input', async () => {
    const requestBody = {
      protocols: ['avoid-mech'],
      scan: [
        {
          coordinates: { x: 0, y: 40 },
          enemies: { type: 'soldier', number: 10 },
        },
        {
          coordinates: { x: 0, y: 80 },
          allies: 5,
          enemies: { type: 'mech', number: 1 },
        },
      ],
    }

    const response = await request(app.server).post('/radar').send(requestBody)

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ x: 0, y: 40 })
  })

  it('should return 500 for invalid input', async () => {
    const requestBody = {
      protocols: ['invalid-protocol'],
      scan: [
        {
          coordinates: { x: 0, y: 10 },
          allies: 0,
          enemies: { type: 'mech', number: 1 },
        },
      ],
    }

    const response = await request(app.server).post('/radar').send(requestBody)

    expect(response.status).toBe(500)
    expect(response.body).toHaveProperty('message')
  })
})
