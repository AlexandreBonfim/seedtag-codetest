import assistAllies from '../protocols/assistAllies'
import avoidCrossfire from '../protocols/avoidCrossfire'
import avoidMech from '../protocols/avoidMech'
import closestEnemies from '../protocols/closestEnemies'
import furthestEnemies from '../protocols/furthestEnemies'
import prioritizeMech from '../protocols/prioritizeMech'
import { Protocol, ProtocolFunction, Scan } from '../../types'
import safeRange from '../safeRange'

const protocolFunctions: Record<string, ProtocolFunction> = {
  'closest-enemies': closestEnemies,
  'furthest-enemies': furthestEnemies,
  'assist-allies': assistAllies,
  'avoid-crossfire': avoidCrossfire,
  'prioritize-mech': prioritizeMech,
  'avoid-mech': avoidMech,
}

export function attackPlan(protocols: Protocol[], scan: Scan[]) {
  const scanSafeRange = safeRange(scan)

  let plan: Scan[] = []

  /*
    Changed the order of the protocols to make sure that the furthest and closest to us are calculated last.
    This is because no priority was given to the protocols based on their order.
  */
  for (const protocol of protocols.reverse()) {
    const protocolFunction = protocolFunctions[protocol]

    const previousplan = plan.length > 0 ? plan : scanSafeRange

    plan = [...protocolFunction(previousplan)]
  }

  return plan[0].coordinates
}
