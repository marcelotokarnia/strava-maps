import { url } from '..'

interface Club {
  city: string
  country: string
  cover_photo: url
  cover_photo_small: url
  featured: boolean
  id: number
  member_count: number
  name: string
  private: boolean
  profile_medium: url
  sport_type: 'cycling' | 'running' | 'triathlon' | 'other'
  state: string
  url: url
  verified: boolean
}

export interface SummaryClub extends Club {
  resource_state: 2
}

export interface DetailedClub extends Club {
  admin: boolean
  following_count: number
  membership: 'member' | 'pending'
  owner: boolean
  resource_state: 3
}
