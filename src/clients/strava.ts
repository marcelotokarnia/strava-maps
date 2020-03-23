import axios from 'axios'
import { StravaActivity } from '../interfaces/clients/strava'

export default {
  getActivities: async (token: string): Promise<Array<StravaActivity>> =>
    (
      await axios.get<Array<StravaActivity>>('https://www.strava.com/api/v3/athlete/activities', {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data,
}
