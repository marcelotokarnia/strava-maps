import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '82337581'

const pedroNicolela: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Pedro Nicolela',
  picture: 'https://graph.facebook.com/4469415366406703/picture?height=256&width=256',
  shortname: 'Pedro N.',
  username: 'mtokarnia',
}

export default pedroNicolela
