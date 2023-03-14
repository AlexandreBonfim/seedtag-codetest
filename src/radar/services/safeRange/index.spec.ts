import { expect, describe, it } from '@jest/globals'

import safeRange from '.'
import { RadarPoint } from '../../types'

const scan: RadarPoint[] = [
  { coordinates: { x: 0, y: 40 }, enemies: { type: 'soldier', number: 10 } },
  { coordinates: { x: 90, y: 80 }, enemies: { type: 'mech', number: 1 } },
]

const unsafeScan: RadarPoint[] = [
  { coordinates: { x: 90, y: 70 }, enemies: { type: 'soldier', number: 10 } },
  { coordinates: { x: 90, y: 80 }, enemies: { type: 'mech', number: 1 } },
]

describe('Safe range', () => {
  describe('when distance is within safe range', () => {
    it('should return scan wtesth 1 item', () => {
      expect(safeRange(scan)).toEqual([
        {
          coordinates: { x: 0, y: 40 },
          enemies: { type: 'soldier', number: 10 },
        },
      ])
    })
  })

  describe('when distance is out safe range', () => {
    it('should return empty array', () => {
      expect(safeRange(unsafeScan)).toEqual([])
    })
  })
})
