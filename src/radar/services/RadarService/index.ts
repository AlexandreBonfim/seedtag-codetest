import { ProtocolType, RadarPoint, RadarResponse } from '../../types'
import { RadarStrategyFactory } from '../RadarStrategyFactory'
import safeRange from '../safeRange'

export class RadarService {
  private readonly factory: RadarStrategyFactory

  constructor() {
    this.factory = new RadarStrategyFactory()
  }

  process(protocols: ProtocolType[], points: RadarPoint[]): RadarResponse {
    let attackPlan: RadarPoint[] = []
    const scanSafeRange = safeRange(points)

    /*
    Changed the order of the protocols to make sure that the furthest and closest to us are calculated last.
    This is because no priority was given to the protocols based on their order.
    */
    for (const protocol of protocols.reverse()) {
      const strategy = this.factory.create(protocol)

      const previousattackPlan =
        attackPlan.length > 0 ? attackPlan : scanSafeRange

      attackPlan = [...strategy.execute(previousattackPlan)]
    }

    return attackPlan[0].coordinates
  }
}
