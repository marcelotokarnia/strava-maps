import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '67363136'

const luis: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Luís Galdino',
  picture: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/67363136/16713317/2/large.jpg',
  shortname: 'Luís G.',
  username: 'mtokarnia',
}

export default luis
