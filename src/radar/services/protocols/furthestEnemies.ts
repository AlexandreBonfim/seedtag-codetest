import { Scan } from '../../types'
import pythagoreanResult from '../pythagoreanResult'

function furthestEnemies(scan: Scan[]): Scan[] {
  const furthest = scan.reduce((prev, curr) => {
    const prevDist = pythagoreanResult(prev.coordinates.x, prev.coordinates.y)
    const currDist = pythagoreanResult(curr.coordinates.x, curr.coordinates.y)

    return prevDist > currDist ? prev : curr
  })

  return [furthest]
}

export default furthestEnemies
