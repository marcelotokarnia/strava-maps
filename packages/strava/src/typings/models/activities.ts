import {
  DetailedSegmentEffort,
  dtISO,
  meters,
  metersPerSecond,
  polyline,
  seconds,
  SummaryGear,
} from '../'
import { LatLng } from './'
import { SummaryAthlete } from './athletes'

export enum ActivityType {
  ALPINE_SKI = 'AlpineSki',
  BACKCOUNTRY_SKI = 'BackcountrySki',
  CANOEING = 'Canoeing',
  CROSSFIT = 'Crossfit',
  EBIKE_RIDE = 'EBikeRide',
  ELLIPTICAL = 'Elliptical',
  GOLF = 'Golf',
  HANDCYCLE = 'Handcycle',
  HIKE = 'Hike',
  ICE_SKATE = 'IceSkate',
  INLINE_SKATE = 'InlineSkate',
  KAYAKING = 'Kayaking',
  KITESURF = 'Kitesurf',
  NORDIC_SKI = 'NordicSki',
  RIDE = 'Ride',
  ROCK_CLIMBING = 'RockClimbing',
  ROLLER_SKI = 'RollerSki',
  ROWING = 'Rowing',
  RUN = 'Run',
  SAIL = 'Sail',
  SKATEBOARD = 'Skateboard',
  SNOWBOARD = 'Snowboard',
  SNOWSHOE = 'Snowshoe',
  SOCCER = 'Soccer',
  STAIR_STEPPER = 'StairStepper',
  STAND_UP_PADDLING = 'StandUpPaddling',
  SURFING = 'Surfing',
  SWIM = 'Swim',
  VELOMOBILE = 'Velomobile',
  VIRTUAL_RIDE = 'VirtualRide',
  VIRTUAL_RUN = 'VirtualRun',
  WALK = 'Walk',
  WEIGHT_TRAINING = 'WeightTraining',
  WHEELCHAIR = 'Wheelchair',
  WINDSURF = 'Windsurf',
  WORKOUT = 'Workout',
  YOGA = 'Yoga',
}

export type TimedZoneRange = {
  max: number
  min: number
  time: seconds
}

export type TimedZoneDistribution = Array<TimedZoneRange>

export type UpdatableActivity = Partial<{
  commute: boolean
  description: string
  gear_id: string
  name: string
  trainer: boolean
  type: ActivityType
}>

export type ActivityZone = {
  custom_zones: boolean
  distribution_buckets: TimedZoneDistribution
  max: number
  points: number
  score: number
  sensor_based: boolean
  type: 'heartrate' | 'power'
}

export type Comment = {
  activity_id: number
  athlete: SummaryAthlete
  created_at: dtISO
  id: number
  text: string
}

export type PolylineMap = {
  id: string
  resource_state: number
  summary_polyline: polyline | null
}

export type MetaAthlete = { id: number }

export type MetaActivity = { id: number }

export type PhotosSummary_primary = {
  id: number
  source: number
  unique_id: string
  urls: string
}

export type PhotosSummary = {
  count: number
  primary: PhotosSummary_primary
}

export type Split = {
  average_speed: metersPerSecond
  distance: meters
  elapsed_time: seconds
  elevation_difference: meters
  moving_time: seconds
  pace_zone: number
  split: number
}

export type Lap = {
  activity: MetaActivity
  athlete: MetaAthlete
  average_cadence: number
  average_speed: metersPerSecond
  distance: meters
  elapsed_time: seconds
  end_index: number
  id: number
  lap_index: number
  max_speed: metersPerSecond
  moving_time: seconds
  name: string
  pace_zone: number
  split: number
  start_date: dtISO
  start_date_local: dtISO
  start_index: number
  total_elevation_gain: meters
}

export interface SummaryActivity {
  achievement_count: number
  athlete: MetaAthlete
  athlete_count: number
  average_speed: metersPerSecond
  average_watts: number
  comment_count: number
  commute: boolean
  device_watts: boolean
  distance: meters
  elapsed_time: seconds
  elev_high: meters
  elev_low: meters
  end_latlng: LatLng
  external_id: string
  flagged: boolean
  gear_id: string
  has_kudoed: boolean
  id: number
  kilojoules: number
  kudos_count: number
  manual: boolean
  map: PolylineMap
  max_speed: metersPerSecond
  max_watts: number
  moving_time: seconds
  name: string
  photo_count: number
  private: boolean
  start_date: dtISO
  start_date_local: dtISO
  start_latlng: LatLng
  timezone: string
  total_elevation_gain: meters
  total_photo_count: number
  trainer: boolean
  type: ActivityType
  upload_id: number
  upload_id_str: string
  weighted_average_watts: number
  workout_type: number | null
}

export interface DetailedActivity extends SummaryActivity {
  average_cadence: number
  average_heartrate: number
  best_efforts: Array<DetailedSegmentEffort>
  calories: number
  description: string
  device_name: string
  embed_token: string
  from_accepted_tag: boolean
  gear: SummaryGear
  has_heartrate: boolean
  laps: Array<Lap>
  location_city: string | null
  location_country: string
  location_state: string | null
  max_heartrate: number
  photos: Array<PhotosSummary>
  pr_count: number
  resource_state: 3
  segment_efforts: Array<DetailedSegmentEffort>
  splits_metric: Array<Split>
  start_latitude: number | null
  start_longitude: number | null
  suffer_score: number
  utc_offset: number
}
