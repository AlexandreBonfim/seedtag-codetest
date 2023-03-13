import { describe, it, expect } from 'vitest'
import pythagoreanResult from '.'

describe('Pythagorean result', () => {
  it('should return 5', () => {
    expect(pythagoreanResult(4, 3)).toEqual(5)
  })
})
