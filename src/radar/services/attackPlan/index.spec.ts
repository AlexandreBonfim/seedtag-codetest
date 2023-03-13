import { describe, it, expect } from 'vitest'
import { attackPlan } from '.'
import { Scan } from '../../types'

const scan: Scan[] = [
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

describe('Attack Plan', () => {
  describe('when avoid-mech protocol', () => {
    it('should return coordinates', () => {
      expect(attackPlan(['avoid-mech'], scan)).toEqual({ x: 0, y: 40 })
    })
  })

  describe('when prioritize-mech protocol', () => {
    it('should return coordinates', () => {
      expect(attackPlan(['prioritize-mech'], scan)).toEqual({ x: 0, y: 80 })
    })
  })

  describe('when closest-enemies protocol', () => {
    it('should return coordinates', () => {
      expect(attackPlan(['closest-enemies'], scan)).toEqual({ x: 0, y: 10 })
    })
  })

  describe('when furthest-enemies protocol', () => {
    it('should return coordinates', () => {
      expect(attackPlan(['furthest-enemies'], scan)).toEqual({ x: 0, y: 80 })
    })
  })

  describe('when assist-allies protocol', () => {
    it('should return coordinates', () => {
      expect(attackPlan(['assist-allies'], scan)).toEqual({ x: 0, y: 80 })
    })
  })

  describe('when avoid-crossfire protocol', () => {
    it('should return coordinates', () => {
      expect(attackPlan(['avoid-crossfire'], scan)).toEqual({ x: 0, y: 40 })
    })
  })

  describe('when use many protocols:closest-enemies","prioritize-mech', () => {
    it('should return coordinates', () => {
      expect(attackPlan(['closest-enemies', 'prioritize-mech'], scan)).toEqual({
        x: 10,
        y: 20,
      })
    })
  })
})
