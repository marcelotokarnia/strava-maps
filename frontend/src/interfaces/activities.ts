export interface ParsedStravaActivity {
  id: string
  name: string
  distance: number
  time: {
    moving: number
    elapsed: number
  }
  elevation: { gain: number }
  type: string
  startDate: string
  startPosition: { lat: number; lng: number }
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
