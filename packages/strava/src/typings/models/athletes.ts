import { dtISO, url } from '../'

export interface SummaryAthlete {
  city: string
  country: string
  created_at: dtISO
  firstname: string
  id: number
  lastname: string
  profile: url
  profile_medium: url
  resource_state: 2
  sex: 'M' | 'F'
  state: string
  summit: boolean
  updated_at: dtISO
}

export interface Athlete {
  badge_type_id: number
  city: string
  country: string
  created_at: string
  firstname: string
  follower: boolean | null
  friend: boolean | null
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
