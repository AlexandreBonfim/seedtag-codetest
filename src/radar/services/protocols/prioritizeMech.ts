import { Scan } from '../../types'

function prioritizeMech(scan: Scan[]): Scan[] {
  const mechs = scan.filter((item: Scan) => item.enemies.type === 'mech')

  if (mechs) return mechs

  return scan.slice(-1)
}

export default prioritizeMech
