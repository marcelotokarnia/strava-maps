import axios from 'axios'
import { StravaActivity } from '../interfaces/clients/strava'

export default {
  auth: async (code: string): Promise<any> =>
    (
      await axios.post('https://www.strava.com/oauth/token', {
        client_id: 28106,
        client_secret: process.env.STRAVA_SECRET,
        code,
        grant_type: 'authorization_code',
      })
    ).data,
  getActivities: async (token: string): Promise<Array<StravaActivity>> =>
    (
      await axios.get<Array<StravaActivity>>('https://www.strava.com/api/v3/athlete/activities', {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data,
}
