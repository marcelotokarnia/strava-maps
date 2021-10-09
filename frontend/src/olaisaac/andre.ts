import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '93448632'

const andre: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'André Castro',
  picture:
    'https://lh3.googleusercontent.com/a-/AOh14GgSladZMiFi4NfYBlaQ68mz6GerMwZWnJqtLcpu=s96-c',
  shortname: 'André C.',
  username: 'mtokarnia',
}

export default andre
