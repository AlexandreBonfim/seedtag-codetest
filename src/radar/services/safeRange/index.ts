import pythagoreanResult from '../../../lib/pythagoreanResult'
import { RadarPoint } from '../../types'

export default function safeRange(scan: RadarPoint[]): RadarPoint[] {
  // Filter out targets that are too far away
  return scan.filter((item) => {
    const distance = pythagoreanResult(item.coordinates.x, item.coordinates.y)

    return distance <= 100
  })
}
