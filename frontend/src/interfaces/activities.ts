export interface Position {
  lat: number
  lng: number
}

export interface ParsedStravaActivity {
  id: string
  athleteId: string
  name: string
  distance: number
  time: {
    moving: number
    elapsed: number
  }
  elevation: { gain: number }
  type: string
  startDate: string
  startPosition: Position
  kudos: number
  polyline: string
  speed: { average: number; max: number }
  heartrate: {
    average: number
    max: number
  }
  prs: number
  achievements: number
}

export interface TransformedStravaActivity {
  id: string
  athleteId: string
  name: string
  distance: number
  time: {
    moving: string
    elapsed: string
  }
  elevation: { gain: number }
  type: string
  startDate: string
  startPosition: Position
  kudos: number
  polyline: Array<Position>
  speed: { average: number; max: number }
  heartrate: {
    average: number
    max: number
  }
  prs: number
  achievements: number
}
