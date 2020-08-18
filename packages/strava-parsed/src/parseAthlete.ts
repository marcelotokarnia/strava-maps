import { Athlete } from '@tokks/strava/typings'
import { ParsedAthlete } from './typings'
import { trim } from 'ramda'

export default (profile: Athlete): ParsedAthlete => ({
  createdAt: profile?.created_at,
  id: '' + profile?.id,
  name: trim(`${profile?.firstname} ${profile.lastname}`),
  picture: profile?.profile,
  username: profile?.username,
})
