import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '99249155'

const eduardo: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Eduardo Santos',
  picture: 'https://lh3.googleusercontent.com/a/AATXAJz-ShNHdP_9vuSsE-wwU4Z8FZw0r0V6z7M8r1ux=s96-c',
  shortname: 'Eduardo S.',
  username: 'mtokarnia',
}

export default eduardo
