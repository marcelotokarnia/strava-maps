import { strava } from '../../clients'

export default {
  Query: {
    getStravaActivities: token => strava.getActivities(token),
  },
}
