import {
  AvoidMechStrategy,
  AvoidCrossfireStrategy,
  ClosestEnemiesStrategy,
  FurthestEnemiesStrategy,
  PrioritizeMechStrategy,
  AssistAlliesStrategy,
  RadarStrategy,
} from '../RadarStrategy'
import { ProtocolType } from '../../types'

export class RadarStrategyFactory {
  create(protocol: ProtocolType): RadarStrategy {
    const strategies: Record<ProtocolType, RadarStrategy> = {
      'avoid-mech': new AvoidMechStrategy(),
      'avoid-crossfire': new AvoidCrossfireStrategy(),
      'closest-enemies': new ClosestEnemiesStrategy(),
      'furthest-enemies': new FurthestEnemiesStrategy(),
      'prioritize-mech': new PrioritizeMechStrategy(),
      'assist-allies': new AssistAlliesStrategy(),
    }

    return strategies[protocol]
  }
}
