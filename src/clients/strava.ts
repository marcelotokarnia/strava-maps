import { StravaActivity, StravaActivityDetails, StravaProfile } from '../interfaces/clients/strava'
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
  getActivities: async (token: string): Promise<Array<StravaActivity>> =>
    (
      await axios.get<Array<StravaActivity>>('https://www.strava.com/api/v3/athlete/activities', {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data,
  getActivityDetails: async (token: string, id: string): Promise<StravaActivityDetails> =>
    (
      await axios.get<StravaActivityDetails>(`https://www.strava.com/api/v3/activities/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data,
  getProfile: async (token: string): Promise<StravaProfile> =>
    (
      await axios.get<StravaProfile>('https://www.strava.com/api/v3/athlete', {
        headers: { Authorization: `Bearer ${token}` },
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
}
