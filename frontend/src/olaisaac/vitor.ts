import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '99028592'

const vitor: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Vitor Vieira',
  picture:
    'https://d3nn82uaxijpm6.cloudfront.net/assets/avatar/athlete/large-800a7033cc92b2a5548399e26b1ef42414dd1a9cb13b99454222d38d58fd28ef.png',
  shortname: 'Vitor V.',
  username: 'mtokarnia',
}

export default vitor
