import { Scan, Coordinate } from '../types'
import assistAllies from './protocols/assistAllies'
import avoidCrossfire from './protocols/avoidCrossfire'
import avoidMech from './protocols/avoidMech'
import closestEnemies from './protocols/closestEnemies'
import furthestEnemies from './protocols/furthestEnemies'
import prioritizeMech from './protocols/prioritizeMech'

export async function applyProtocols(protocols: string[], scan: Scan[]) {
  // Filter out targets that are too far away
  const scanSafeRange = scan.filter((item) => {
    const distance = Math.sqrt(
      Math.pow(item.coordinates.x, 2) + Math.pow(item.coordinates.y, 2),
    )

    return distance <= 100
  })

  let attackPlan: Scan[] = []

  for (const protocol of protocols.reverse()) {
    // reverse cuz we want the close and further to be the lasst ones.
    switch (protocol) {
      case 'closest-enemies':
        attackPlan = [...attackPlan, ...closestEnemies(scanSafeRange)]
        break
      case 'furthest-enemies':
        console.log('fur- attackPlan', attackPlan)
        console.log('furtherFN', furthestEnemies(scanSafeRange))
        attackPlan = [...attackPlan, ...furthestEnemies(scanSafeRange)]
        break
      case 'assist-allies':
        attackPlan = [...attackPlan, ...assistAllies(scanSafeRange)]
        break
      case 'avoid-crossfire':
        attackPlan = [...attackPlan, ...avoidCrossfire(scanSafeRange)]
        break
      case 'prioritize-mech':
        attackPlan = [...attackPlan, ...prioritizeMech(scanSafeRange)]
        break
      case 'avoid-mech':
        console.log('avoidMech-attackPlan', attackPlan)
        console.log('avoidMechFN', avoidMech(scanSafeRange))
        attackPlan = [...attackPlan, ...avoidMech(scanSafeRange)]
        break
      default:
        break
    }
  }
  console.log('attackPlan-res', attackPlan)

  return attackPlan[0].coordinates
}
