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
      await stravaApi({
        access_token: accessToken,
        timeout: 1500,
      }).Activities.getLoggedInAthleteActivities()
    ).data(),
  getActivityDetails: async (accessToken: string, id: string): Promise<StravaActivityDetails> =>
    (
      await stravaApi({ access_token: accessToken, timeout: 1500 }).Activities.getActivityById({
        id: +id,
      })
    ).data(),
  getClubActivities: async (accessToken: string, id: string): Promise<Array<StravaActivity>> =>
    (
      await stravaApi({ access_token: accessToken, timeout: 1500 }).Clubs.getClubActivitiesById({
        id: +id,
        page: 1,
        per_page: 100,
      })
    ).data(),
  getProfile: async (accessToken: string): Promise<StravaProfile> =>
    (
      await stravaApi({ access_token: accessToken, timeout: 1500 }).Athletes.getLoggedInAthlete()
    ).data(),
  getRoute: async (accessToken: string, id: string): Promise<any> =>
    (
      await stravaApi({ access_token: accessToken, timeout: 1500 }).Routes.getRouteById({ id: +id })
    ).data(),
  refreshToken: async (refresh_token: string): Promise<any> =>
    (await stravaApi({ timeout: 1500 }).Auth.refresh({ body: { refresh_token } })).data(),
}
