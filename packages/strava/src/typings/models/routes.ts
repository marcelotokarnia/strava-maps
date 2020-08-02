export type dt = string // date time in the following format 2000-01-23T04:56:07.000+00:00
export type seconds = number
export type epoch = number

export enum RouteType {
  RIDE = 1,
  RUN = 2,
}

export enum RouteSubType {
  ROAD = 1,
  MOUNTAIN_BIKE = 2,
  CROSS = 3,
  TRAIL = 4,
  MIXED = 5,
}

export interface Route {
  // athlete: SummaryAthlete
  athlete: any
  created_at: dt
  description: string
  distance: number
  elevation_gain: number
  estimated_moving_time: seconds
  id: number
  id_str: string
  // map: PolylineMap
  map: any
  name: string
  private: boolean
  // segments: Array<Segment>
  segments: Array<any>
  starred: boolean
  sub_type: RouteSubType
  timestamp: epoch
  type: RouteType
  updated_at: dt
}
