import { ParsedStravaProfile } from '../../frontend/src/interfaces/profile'
import { StravaProfile } from '../interfaces/clients/strava'
import { trim } from 'ramda'

export default (profile: StravaProfile): ParsedStravaProfile => ({
  id: '' + profile?.id,
  username: profile?.username,
  name: trim(`${profile?.firstname} ${profile.lastname}`),
  createdAt: profile?.created_at,
  picture: profile?.profile,
})
