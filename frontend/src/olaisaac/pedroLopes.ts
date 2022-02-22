import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '65721946'

const pedro: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Pedro Lopes',
  picture: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/65721946/16522292/2/large.jpg',
  shortname: 'Pedro L.',
  username: 'mtokarnia',
}

export default pedro
