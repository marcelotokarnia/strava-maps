import { StravaActivity, StravaProfile } from '../interfaces/clients/strava'
import axios from 'axios'

export default {
  auth: async (code: string): Promise<any> =>
    (
      await axios.post('https://www.strava.com/oauth/token', {
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_SECRET,
        code,
        grant_type: 'authorization_code',
      })
    ).data,
  refreshToken: async (refresh_token: string): Promise<any> =>
    (
      await axios.post('https://www.strava.com/oauth/token', {
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_SECRET,
        refresh_token,
        grant_type: 'refresh_token',
      })
    ).data,
  getActivities: async (token: string): Promise<Array<StravaActivity>> =>
    (
      await axios.get<Array<StravaActivity>>('https://www.strava.com/api/v3/athlete/activities', {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data,
  getProfile: async (token: string): Promise<StravaProfile> =>
    (
      await axios.get<StravaProfile>('https://www.strava.com/api/v3/athlete', {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data,
}
