import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '41770902'

const sergio: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Sérgio A. Reis',
  picture: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/41770902/19385651/1/large.jpg',
  shortname: 'Sérgio A. R.',
  username: 'mtokarnia',
}

export default sergio
