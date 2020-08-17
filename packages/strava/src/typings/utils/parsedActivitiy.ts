import { Position } from './'
export interface ParsedActivity {
  achievements: number
  athleteId: string
  distance: number
  elevation: { gain: number }
  heartrate: {
    average: number
    max: number
  }
  id: string
  kudos: number
  name: string
  polyline: string | null
  prs: number
  speed: { average: number; max: number }
  startDate: string
  startPosition: Position | null
  time: {
    elapsed: number
    moving: number
  }
  type: string
}
