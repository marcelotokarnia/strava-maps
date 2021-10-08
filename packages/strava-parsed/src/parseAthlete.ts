import { ParsedAthlete } from './typings'
import { SummaryAthlete } from '@tokks/strava/typings'
import { trim } from 'ramda'

export default (profile: SummaryAthlete): ParsedAthlete => ({
  createdAt: profile?.created_at,
  id: '' + profile?.id,
  name: trim(`${profile?.firstname} ${profile.lastname}`),
  picture: profile?.profile,
  username: (profile as any)?.username,
})
