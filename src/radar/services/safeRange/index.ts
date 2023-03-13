import { Scan } from '../../types'
import pythagoreanResult from '../pythagoreanResult'

export default function safeRange(scan: Scan[]): Scan[] {
  // Filter out targets that are too far away
  return scan.filter((item) => {
    const distance = pythagoreanResult(item.coordinates.x, item.coordinates.y)

    return distance <= 100
  })
}
