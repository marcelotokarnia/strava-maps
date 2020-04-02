import { ParsedStravaActivity } from '../../frontend/src/interfaces/activities'

const parsedActivity: ParsedStravaActivity = {
  id: '154504250376823',
  name: 'Happy Friday',
  distance: 24931.4,
  time: {
    elapsed: 4500,
    moving: 4500,
  },
  elevation: { gain: 0 },
  type: 'Ride',
  startDate: '2018-05-02T12:15:09Z',
  startPosition: { lat: 37.83, lng: -122.26 },
  kudos: 3,
  polyline: null,
  speed: {
    average: 5.54,
    max: 11,
  },
  heartrate: {
    average: 140.3,
    max: 178,
  },
  prs: 0,
  achievements: 0,
}

export default parsedActivity
