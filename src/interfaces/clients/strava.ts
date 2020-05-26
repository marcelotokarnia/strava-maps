export type LatLng = [number, number]
export type ParsedLatLng = { lat: number; lng: number }

export interface StravaProfile {
  badge_type_id: number
  city: string
  country: string
  created_at: string
  firstname: string
  follower: boolean
  friend: boolean
  id: number
  lastname: string
  premium: boolean
  profile: string
  profile_medium: string
  resource_state: number
  sex: string
  state: string
  summit: boolean
  updated_at: string
  username: string
}

export interface StravaActivity {
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
  location_city: string
  location_country: string
  location_state: string
  manual: boolean
  map: {
    id: string
    resource_state: number
    summary_polyline: string
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
  start_latitude: number
  start_latlng: LatLng
  start_longitude: number
  suffer_score: number
  timezone: string
  total_elevation_gain: number
  total_photo_count: number
  trainer: boolean
  type: string
  upload_id: number
  utc_offset: number
  weighted_average_watts: number
  workout_type: string
}

export type StravaActivityDetails = StravaActivity
