import { ParsedStravaProfile } from '@tokks/strava'

const tere: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: '80692715',
  name: 'Teresa Broggi Ciardullo',
  picture: 'https://graph.facebook.com/10158118100198131/picture?height=256&width=256',
  shortname: 'Teresa B. C.',
  username: 'mtokarnia',
}

export const tereActivities: any = [
  {
    athleteId: '80692715',
    distance: 4000.0,
    id: '4953541542',
    name: 'Morning Walk',
    pace: {
      average: 855,
    },
    startDate: '2021-03-15T11:30:15Z',
    time: {
      elapsed: 3420,
    },
    type: 'Run',
  },
  {
    athleteId: '80692715',
    distance: 4200.0,
    id: '4956000941',
    name: 'Morning Walk',
    pace: {
      average: 855,
    },
    startDate: '2021-03-16T11:30:15Z',
    time: {
      elapsed: 3420,
    },
    type: 'Run',
  },
  {
    athleteId: '80692715',
    distance: 4570.0,
    id: '4962059525',
    name: 'Morning Run',
    pace: {
      average: 880,
    },
    startDate: '2021-03-17T13:30:15Z',
    time: {
      elapsed: 4020,
    },
    type: 'Run',
  },
  {
    athleteId: '80692715',
    distance: 4440.0,
    id: '4967240484',
    name: 'Morning Run',
    pace: {
      average: 784,
    },
    startDate: '2021-03-18T11:30:15Z',
    time: {
      elapsed: 3480,
    },
    type: 'Run',
  },
]

export default tere
