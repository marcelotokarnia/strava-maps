import {
  StravaActivity,
  StravaActivityDetails,
  StravaProfile,
} from '@src/interfaces/clients/strava'
import stravaApi from '@tokks/strava/api'

export default {
  auth: async (code: string): Promise<any> =>
    (await stravaApi({ timeout: 1500 }).Auth.authorize({ body: { code } })).data(),
  getActivities: async (accessToken: string): Promise<Array<StravaActivity>> =>
    (
      await stravaApi({ accessToken, timeout: 1500 }).Activities.getLoggedInAthleteActivities()
    ).data(),
  getActivityDetails: async (accessToken: string, id: string): Promise<StravaActivityDetails> =>
    (await stravaApi({ accessToken, timeout: 1500 }).Activities.getActivityById({ id })).data(),
  getProfile: async (accessToken: string): Promise<StravaProfile> =>
    (await stravaApi({ accessToken, timeout: 1500 }).Athletes.getLoggedInAthlete()).data(),
  getRoute: async (accessToken: string, id: string | number): Promise<any> =>
    (await stravaApi({ accessToken, timeout: 1500 }).Routes.getRouteById({ id })).data(),
  refreshToken: async (refresh_token: string): Promise<any> =>
    (await stravaApi({ timeout: 1500 }).Auth.refresh({ body: { refresh_token } })).data(),
}
