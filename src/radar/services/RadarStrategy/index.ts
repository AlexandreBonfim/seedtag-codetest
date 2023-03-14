import pythagoreanResult from '../../../lib/pythagoreanResult'
import { RadarPoint } from '../../types'

export interface RadarStrategy {
  execute(points: RadarPoint[]): RadarPoint[]
}

export class AvoidMechStrategy implements RadarStrategy {
  execute(points: RadarPoint[]): RadarPoint[] {
    return points.filter((item: RadarPoint) => item.enemies.type !== 'mech')
  }
}

export class AvoidCrossfireStrategy implements RadarStrategy {
  execute(points: RadarPoint[]): RadarPoint[] {
    return points.filter(
      (item: RadarPoint) =>
        !Object.prototype.hasOwnProperty.call(item, 'allies'),
    )
  }
}

export class ClosestEnemiesStrategy implements RadarStrategy {
  execute(points: RadarPoint[]): RadarPoint[] {
    const closest = points.reduce((prev, curr) => {
      const prevDist = pythagoreanResult(prev.coordinates.x, prev.coordinates.y)
      const currDist = pythagoreanResult(curr.coordinates.x, curr.coordinates.y)

      return prevDist < currDist ? prev : curr
    })

    return [closest]
  }
}

export class FurthestEnemiesStrategy implements RadarStrategy {
  execute(points: RadarPoint[]): RadarPoint[] {
    const furthest = points.reduce((prev, curr) => {
      const prevDist = pythagoreanResult(prev.coordinates.x, prev.coordinates.y)
      const currDist = pythagoreanResult(curr.coordinates.x, curr.coordinates.y)

      return prevDist > currDist ? prev : curr
    })

    return [furthest]
  }
}

export class PrioritizeMechStrategy implements RadarStrategy {
  execute(points: RadarPoint[]): RadarPoint[] {
    const mechs = points.filter(
      (item: RadarPoint) => item.enemies.type === 'mech',
    )

    if (mechs) return mechs

    return points.slice(-1)
  }
}

export class AssistAlliesStrategy implements RadarStrategy {
  execute(points: RadarPoint[]): RadarPoint[] {
    return points.filter((item: RadarPoint) =>
      Object.prototype.hasOwnProperty.call(item, 'allies'),
    )
  }
}
