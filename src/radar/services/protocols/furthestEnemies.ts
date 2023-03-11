import { Scan } from '../../types'

function furthestEnemies(scan: Scan[]): Scan[] {
  const furthest = scan.reduce((prev, curr) => {
    const prevDist = Math.sqrt(
      Math.pow(prev.coordinates.x, 2) + Math.pow(prev.coordinates.y, 2),
    )
    const currDist = Math.sqrt(
      Math.pow(curr.coordinates.x, 2) + Math.pow(curr.coordinates.y, 2),
    )

    return prevDist > currDist ? prev : curr
  })

  return [furthest]
}

export default furthestEnemies
