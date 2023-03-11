import { Scan } from '../../types'

function avoidCrossfire(scan: Scan[]): Scan[] {
  return scan.filter((item: Scan) => item.allies === undefined)
}

export default avoidCrossfire
