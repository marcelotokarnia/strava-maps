import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '99245972'

const victor: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Victor Palmerini',
  picture:
    'https://lh3.googleusercontent.com/a-/AOh14Gjjsut94ekilENIWQwaqIjb4qTptSfSkgSaCg8i=s96-c',
  shortname: 'Victor P.',
  username: 'mtokarnia',
}

export default victor
