import { Scan } from '../../types'
import pythagoreanResult from '../pythagoreanResult'

function closestEnemies(scan: Scan[]): Scan[] {
  const closest = scan.reduce((prev, curr) => {
    const prevDist = pythagoreanResult(prev.coordinates.x, prev.coordinates.y)
    const currDist = pythagoreanResult(curr.coordinates.x, curr.coordinates.y)

    return prevDist < currDist ? prev : curr
  })

  return [closest]
}

export default closestEnemies
