import { Scan } from '../../types'

function avoidMech(scan: Scan[]): Scan[] {
  return scan.filter((item: Scan) => item.enemies.type !== 'mech')
}

export default avoidMech
