import { Protocol, ProtocolFunction, Scan } from '../types'
import assistAllies from './protocols/assistAllies'
import avoidCrossfire from './protocols/avoidCrossfire'
import avoidMech from './protocols/avoidMech'
import closestEnemies from './protocols/closestEnemies'
import furthestEnemies from './protocols/furthestEnemies'
import prioritizeMech from './protocols/prioritizeMech'
import pythagoreanResult from './pythagoreanResult'

const protocolFunctions: Record<string, ProtocolFunction> = {
  'closest-enemies': closestEnemies,
  'furthest-enemies': furthestEnemies,
  'assist-allies': assistAllies,
  'avoid-crossfire': avoidCrossfire,
  'prioritize-mech': prioritizeMech,
  'avoid-mech': avoidMech,
}

export async function applyProtocols(protocols: Protocol[], scan: Scan[]) {
  // Filter out targets that are too far away
  const scanSafeRange = scan.filter((item) => {
    const distance = pythagoreanResult(item.coordinates.x, item.coordinates.y)

    return distance <= 100
  })

  let attackPlan: Scan[] = []

  // reverse cuz we want the close and further to be the last ones.
  for (const protocol of protocols.reverse()) {
    const protocolFunction = protocolFunctions[protocol]

    const previousAttackPlan =
      attackPlan.length > 0 ? attackPlan : scanSafeRange

    attackPlan = [...protocolFunction(previousAttackPlan)]
  }

  return attackPlan[0].coordinates
}
