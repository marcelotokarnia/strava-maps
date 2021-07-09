import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '5587011978'

const julia: ParsedStravaProfile = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Julia Iurko',
  picture: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/48302659/20418242/1/large.jpg',
  username: 'mtokarnia',
}

export const juliaActivitiesV3: any = [
  {
    athleteId,
    distance: 7400,
    elevation: {
      gain: 84.2,
    },
    id: '5587011978',
    name: 'Corrida ao entardecer',
    startDate: '2021-07-06T21:00:00Z',
    time: {
      elapsed: 2777,
    },
    type: 'Run',
  },
  {
    athleteId,
    distance: 5500,
    elevation: {
      gain: 48.0,
    },
    id: '5594439176',
    name: 'Corrida matinal',
    startDate: '2021-07-08T11:40:00Z',
    time: {
      elapsed: 1919,
    },
    type: 'Run',
  },
]

export default julia
