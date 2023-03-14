export type ProtocolType =
  | 'closest-enemies'
  | 'furthest-enemies'
  | 'assist-allies'
  | 'avoid-crossfire'
  | 'prioritize-mech'
  | 'avoid-mech'

export type RadarPoint = {
  coordinates: { x: number; y: number }
  enemies: {
    type: 'soldier' | 'mech'
    number: number
  }
  allies?: number
}

export type RadarResponse = { x: number; y: number }
