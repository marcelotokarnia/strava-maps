export interface ParsedStravaActivity {
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
  polyline: string
  prs: number
  speed: { average: number; max: number }
  startDate: string
  startPosition: Position
  time: {
    elapsed: number
    moving: number
  }
  type: string
}

export interface ParsedStravaProfile {
  createdAt: string
  id: string
  name: string
  picture: string
  username: string
}

export interface Position {
  lat: number
  lng: number
}
