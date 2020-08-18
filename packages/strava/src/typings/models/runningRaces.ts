import { dtISO, meters, url } from '..'

export interface RunningRace {
  city: string
  country: string
  distance: meters
  id: number
  measurement_preference: 'feet' | 'meters'
  name: string
  route_ids: Array<number>
  running_race_type: number
  start_date_local: dtISO
  state: string
  url: url
  website_url: url
}
