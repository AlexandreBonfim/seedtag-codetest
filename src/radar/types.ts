export type Protocol =
  | 'closest-enemies'
  | 'furthest-enemies'
  | 'assist-allies'
  | 'avoid-crossfire'
  | 'prioritize-mech'
  | 'avoid-mech'

export type Scan = {
  coordinates: { x: number; y: number }
  enemies: {
    type: 'soldier' | 'mech'
    number: number
  }
  allies?: number
}

export type ProtocolFunction = (scan: Scan[]) => Scan[]
