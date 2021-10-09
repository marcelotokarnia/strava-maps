import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '25434163'

const sofia: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Sofia Renault',
  picture: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/25434163/12305132/5/large.jpg',
  shortname: 'Sofia R.',
  username: 'mtokarnia',
}

export default sofia
