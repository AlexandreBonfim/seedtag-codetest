// import { describe, describe, it, expect } from 'vitest'
import { expect, describe, it } from '@jest/globals'

import pythagoreanResult from '.'

describe('Pythagorean result', () => {
  describe('when passed 4 and 3', () => {
    it('should return 5', () => {
      expect(pythagoreanResult(4, 3)).toEqual(5)
    })
  })

  describe('when passed 0 and 0', () => {
    it('should return 50', () => {
      expect(pythagoreanResult(0, 0)).toEqual(0)
    })
  })

  describe('when passed -4 and -3', () => {
    it('should return 5', () => {
      expect(pythagoreanResult(-4, -3)).toEqual(5)
    })
  })
})
