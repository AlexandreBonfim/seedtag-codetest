import { Scan } from '../../types'

function avoidCrossfire(scan: Scan[]): Scan[] {
  return scan.filter(
    (item: Scan) => !Object.prototype.hasOwnProperty.call(item, 'allies'),
  )
}

export default avoidCrossfire
