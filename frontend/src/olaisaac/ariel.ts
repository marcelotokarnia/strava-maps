import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '93570113'

const ariel: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Ariel Kövesi',
  picture: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/93570113/22258768/1/large.jpg',
  shortname: 'Ariel K.',
  username: 'mtokarnia',
}

export default ariel
