import { expect, describe, it } from '@jest/globals'

import { RadarService } from '.'
import { RadarPoint } from '../../types'

describe('Attack Plan', () => {
  const points: RadarPoint[] = [
    { coordinates: { x: 0, y: 40 }, enemies: { type: 'soldier', number: 10 } },
    {
      coordinates: { x: 0, y: 80 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    },
    { coordinates: { x: 0, y: 10 }, enemies: { type: 'soldier', number: 100 } },
    { coordinates: { x: 90, y: 90 }, enemies: { type: 'mech', number: 10 } },
    { coordinates: { x: 10, y: 20 }, enemies: { type: 'mech', number: 10 } },
  ]

  describe('when avoid-mech protocol', () => {
    it('should return coordinates', () => {
      expect(new RadarService().process(['avoid-mech'], points)).toEqual({
        x: 0,
        y: 40,
      })
    })
  })

  describe('when prioritize-mech protocol', () => {
    it('should return coordinates', () => {
      expect(new RadarService().process(['prioritize-mech'], points)).toEqual({
        x: 0,
        y: 80,
      })
    })
  })

  describe('when closest-enemies protocol', () => {
    it('should return coordinates', () => {
      expect(new RadarService().process(['closest-enemies'], points)).toEqual({
        x: 0,
        y: 10,
      })
    })
  })

  describe('when furthest-enemies protocol', () => {
    it('should return coordinates', () => {
      expect(new RadarService().process(['furthest-enemies'], points)).toEqual({
        x: 0,
        y: 80,
      })
    })
  })

  describe('when assist-allies protocol', () => {
    it('should return coordinates', () => {
      expect(new RadarService().process(['assist-allies'], points)).toEqual({
        x: 0,
        y: 80,
      })
    })
  })

  describe('when avoid-crossfire protocol', () => {
    it('should return coordinates', () => {
      expect(new RadarService().process(['avoid-crossfire'], points)).toEqual({
        x: 0,
        y: 40,
      })
    })
  })

  describe('when use many protocols:closest-enemies","prioritize-mech', () => {
    it('should return coordinates', () => {
      expect(
        new RadarService().process(
          ['closest-enemies', 'prioritize-mech'],
          points,
        ),
      ).toEqual({
        x: 10,
        y: 20,
      })
    })
  })
})
