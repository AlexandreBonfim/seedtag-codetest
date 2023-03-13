import { describe, it, expect } from 'vitest'
import safeRange from '.'
import { Scan } from '../../types'

const scan: Scan[] = [
  { coordinates: { x: 0, y: 40 }, enemies: { type: 'soldier', number: 10 } },
  { coordinates: { x: 90, y: 80 }, enemies: { type: 'mech', number: 1 } },
]

const filteredScan: Scan[] = [
  { coordinates: { x: 0, y: 40 }, enemies: { type: 'soldier', number: 10 } },
]

describe('Safe range', () => {
  it('should return scan with 1 item', () => {
    expect(safeRange(scan)).toEqual(filteredScan)
  })
})
