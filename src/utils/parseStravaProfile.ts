import { ParsedStravaProfile } from '@tokks/strava'
import { StravaProfile } from 'interfaces/clients/strava'
import { trim } from 'ramda'

export default (profile: StravaProfile): ParsedStravaProfile => ({
  createdAt: profile?.created_at,
  id: '' + profile?.id,
  name: trim(`${profile?.firstname} ${profile.lastname}`),
  picture: profile?.profile,
  username: profile?.username,
})
