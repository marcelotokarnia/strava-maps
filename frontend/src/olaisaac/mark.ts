import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '36772823'

const mark: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Mark Matern',
  picture: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/36772823/18395361/1/large.jpg',
  shortname: 'Mark M.',
  username: 'mtokarnia',
}

export default mark
