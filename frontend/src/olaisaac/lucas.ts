import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '17481660'

const lucas: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Lucas André Almeida Moura',
  picture: 'https://graph.facebook.com/10210780487418008/picture?height=256&width=256',
  shortname: 'Lucas André A.',
  username: 'mtokarnia',
}

export default lucas
