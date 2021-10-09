import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '30220419'

const beatriz: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Beatriz Garcia',
  picture: 'https://graph.facebook.com/10216372203606465/picture?height=256&width=256',
  shortname: 'Beatriz G.',
  username: 'mtokarnia',
}

export default beatriz
