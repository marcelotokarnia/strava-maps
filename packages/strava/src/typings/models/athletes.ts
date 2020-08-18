import { dtISO, kg, meters, SummaryClub, SummaryGear, url } from '../'

export interface ActivityStats {
  all_ride_totals: meters
  all_run_totals: meters
  all_swim_totals: meters
  biggest_climb_elevation_gain: meters
  biggest_ride_distance: meters
  recent_ride_totals: meters
  recent_run_totals: meters
  recent_swim_totals: meters
  ytd_ride_totals: meters
  ytd_run_totals: meters
  ytd_swim_totals: meters
}

export interface ZoneRange {
  max: number
  min: number
}

export type ZoneRanges = Array<ZoneRange>

export interface HeartRateZoneRanges {
  custom_zones: boolean
  zones: ZoneRanges
}

export interface PowerZoneRanges {
  zones: ZoneRanges
}

export interface Zones {
  heart_rate: HeartRateZoneRanges
  power: PowerZoneRanges
}

interface Athlete {
  city: string
  country: string
  created_at: dtISO
  firstname: string
  id: number
  lastname: string
  profile: url
  profile_medium: url
  sex: 'M' | 'F'
  state: string
  summit: boolean
  updated_at: dtISO
}

export interface SummaryAthlete extends Athlete {
  resource_state: 2
}

export interface DetailedAthlete extends Athlete {
  bikes: Array<SummaryGear>
  clubs: Array<SummaryClub>
  follower_count: number
  friend_count: number
  ftp: number
  measurement_preference: 'meters' | 'feet'
  resource_state: 3
  shoes: Array<SummaryGear>
  weight: kg
}
