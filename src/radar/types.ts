export type Protocol =
  | 'closest-enemies'
  | 'furthest-enemies'
  | 'assist-allies'
  | 'avoid-crossfire'
  | 'prioritize-mech'
  | 'avoid-mech'

export type Coordinate = {
  x: number
  y: number
}

export type Scan = {
  coordinates: Coordinate
  enemies: {
    type: 'soldier' | 'mech'
    number: number
  }
  allies?: number
}
