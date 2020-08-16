import { LatLng } from './'

export interface Activity {
  achievement_count: number
  athlete: {
    id: number
    resource_state: number
  }
  athlete_count: number
  average_cadence: number
  average_heartrate: number
  average_speed: number
  average_watts: number
  comment_count: number
  commute: boolean
  device_watts: boolean
  distance: number
  elapsed_time: number
  end_latlng: LatLng
  external_id: string
  flagged: boolean
  from_accepted_tag: boolean
  gear_id: string
  has_heartrate: boolean
  has_kudoed: boolean
  id: number
  kilojoules: number
  kudos_count: number
  location_city: string | null
  location_country: string
  location_state: string | null
  manual: boolean
  map: {
    id: string
    resource_state: number
    summary_polyline: string | null
  }
  max_heartrate: number
  max_speed: number
  max_watts: number
  moving_time: number
  name: string
  photo_count: number
  pr_count: number
  private: boolean
  resource_state: number
  start_date: string
  start_date_local: string
  start_latitude: number | null
  start_latlng: LatLng
  start_longitude: number | null
  suffer_score: number
  timezone: string
  total_elevation_gain: number
  total_photo_count: number
  trainer: boolean
  type: string
  upload_id: number
  utc_offset: number
  weighted_average_watts: number
  workout_type: string | null
}

export type ActivityDetails = Activity
