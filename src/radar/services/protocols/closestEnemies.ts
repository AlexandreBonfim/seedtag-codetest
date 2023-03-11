import { Scan } from '../../types'

function closestEnemies(scan: Scan[]): Scan[] {
  const closest = scan.reduce((prev, curr) => {
    const prevDist = Math.sqrt(
      prev.coordinates.x ** 2 + prev.coordinates.y ** 2,
    )

    const currDist = Math.sqrt(
      curr.coordinates.x ** 2 + curr.coordinates.y ** 2,
    )

    return prevDist < currDist ? prev : curr
  })

  return [closest]
}

export default closestEnemies
