import { expect, describe, it, beforeEach } from '@jest/globals'
import { RadarStrategyFactory } from '.'

import {
  AvoidMechStrategy,
  AvoidCrossfireStrategy,
  ClosestEnemiesStrategy,
  FurthestEnemiesStrategy,
  PrioritizeMechStrategy,
  AssistAlliesStrategy,
} from '../RadarStrategy'

describe('RadarStrategyFactory', () => {
  let factory: RadarStrategyFactory

  beforeEach(() => {
    factory = new RadarStrategyFactory()
  })

  describe('create', () => {
    it('should create the correct strategy for "avoid-mech" protocol', () => {
      const strategy = factory.create('avoid-mech')
      expect(strategy).toBeInstanceOf(AvoidMechStrategy)
    })

    it('should create the correct strategy for "avoid-crossfire" protocol', () => {
      const strategy = factory.create('avoid-crossfire')
      expect(strategy).toBeInstanceOf(AvoidCrossfireStrategy)
    })

    it('should create the correct strategy for "closest-enemies" protocol', () => {
      const strategy = factory.create('closest-enemies')
      expect(strategy).toBeInstanceOf(ClosestEnemiesStrategy)
    })

    it('should create the correct strategy for "furthest-enemies" protocol', () => {
      const strategy = factory.create('furthest-enemies')
      expect(strategy).toBeInstanceOf(FurthestEnemiesStrategy)
    })

    it('should create the correct strategy for "prioritize-mech" protocol', () => {
      const strategy = factory.create('prioritize-mech')
      expect(strategy).toBeInstanceOf(PrioritizeMechStrategy)
    })

    it('should create the correct strategy for "assist-allies" protocol', () => {
      const strategy = factory.create('assist-allies')
      expect(strategy).toBeInstanceOf(AssistAlliesStrategy)
    })
  })
})
