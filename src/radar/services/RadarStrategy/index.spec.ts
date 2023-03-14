import { expect, describe, it } from '@jest/globals'
import {
  AssistAlliesStrategy,
  AvoidCrossfireStrategy,
  AvoidMechStrategy,
  ClosestEnemiesStrategy,
  FurthestEnemiesStrategy,
  PrioritizeMechStrategy,
} from '.'
import { RadarPoint } from '../../types'

describe('Radar Strategies', () => {
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

  describe('when execute AvoidMechStrategy', () => {
    it('should exclude RadarPoints with enemy type "mech"', () => {
      const strategy = new AvoidMechStrategy()
      const result = strategy.execute(points)
      expect(result).toEqual([
        {
          coordinates: { x: 0, y: 40 },
          enemies: { type: 'soldier', number: 10 },
        },
        {
          coordinates: { x: 0, y: 10 },
          enemies: { type: 'soldier', number: 100 },
        },
      ])
    })
  })

  describe('when execute AvoidCrossfireStrategy', () => {
    it('should exclude RadarPoints with allies', () => {
      const strategy = new AvoidCrossfireStrategy()
      const result = strategy.execute(points)
      expect(result).toEqual([
        {
          coordinates: { x: 0, y: 40 },
          enemies: { type: 'soldier', number: 10 },
        },
        {
          coordinates: { x: 0, y: 10 },
          enemies: { type: 'soldier', number: 100 },
        },
        {
          coordinates: { x: 90, y: 90 },
          enemies: { type: 'mech', number: 10 },
        },
        {
          coordinates: { x: 10, y: 20 },
          enemies: { type: 'mech', number: 10 },
        },
      ])
    })
  })

  describe('when execute ClosestEnemiesStrategy', () => {
    it('should return the closest RadarPoint to the origin', () => {
      const strategy = new ClosestEnemiesStrategy()
      const result = strategy.execute(points)
      expect(result).toEqual([
        {
          coordinates: { x: 0, y: 10 },
          enemies: { type: 'soldier', number: 100 },
        },
      ])
    })
  })

  describe('when execute FurthestEnemiesStrategy', () => {
    it('should return the furthest RadarPoint from the origin', () => {
      const strategy = new FurthestEnemiesStrategy()
      const result = strategy.execute(points)
      expect(result).toEqual([
        {
          coordinates: { x: 90, y: 90 },
          enemies: { type: 'mech', number: 10 },
        },
      ])
    })
  })

  describe('when execute PrioritizeMechStrategy', () => {
    it('should prioritize RadarPoints with enemy type "mech"', () => {
      const strategy = new PrioritizeMechStrategy()
      const result = strategy.execute(points)
      expect(result).toEqual([
        {
          coordinates: { x: 0, y: 80 },
          allies: 5,
          enemies: { type: 'mech', number: 1 },
        },
        {
          coordinates: { x: 90, y: 90 },
          enemies: { type: 'mech', number: 10 },
        },
        {
          coordinates: { x: 10, y: 20 },
          enemies: { type: 'mech', number: 10 },
        },
      ])
    })
  })

  describe('when execute AssistAlliesStrategy', () => {
    it('should return the last RadarPoint if there are no mechs', () => {
      const strategy = new AssistAlliesStrategy()
      const result = strategy.execute(points)
      expect(result).toEqual([
        {
          coordinates: { x: 0, y: 80 },
          allies: 5,
          enemies: { type: 'mech', number: 1 },
        },
      ])
    })
  })
})
