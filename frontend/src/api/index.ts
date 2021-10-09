import { ActivitiesTypes } from 'interfaces/store/actions'
import { API as APIType } from 'interfaces/api'
import developmentAPI from 'api/development'
import getActivitiesQuery from 'graphql/query/getActivities'
import getActivityDetails from 'graphql/query/getActivityDetails'
import getStravaClubActivities from 'graphql/query/getStravaClubActivities'
import productionAPI from 'api/production'

const API = (useMockApi: boolean): APIType => (useMockApi ? developmentAPI : productionAPI)

const map = useMockApi => ({
  save: async body =>
    (
      await API(useMockApi).map.save({
        body,
      })
    ).data(),
  getColabRoute: async id =>
    (
      await API(useMockApi).map.getColabRoute({
        id,
      })
    ).data(),
})

const graphql = useMockApi => ({
  getActivities: async ({ mapId = null } = { mapId: null }) =>
    (
      await API(useMockApi).graphql.getData({
        body: {
          query: getActivitiesQuery,
          variables: { mapId },
        },
      })
    ).data().data,
  getActivityDetails: async id =>
    (
      await API(useMockApi).graphql.getData({
        body: {
          query: getActivityDetails,
          variables: { id },
        },
      })
    ).data().data,
  getStravaClubActivities: async id =>
    (
      await API(useMockApi).graphql.getData({
        body: {
          query: getStravaClubActivities,
          variables: { id },
        },
      })
    ).data().data,
})

export const meta = useMockApi => ({
  tags: async (url: string) => (await API(useMockApi).meta.tags({ body: { url } })).data(),
})

const strava = useMockApi => ({
  auth: async (code: string) => (await API(useMockApi).strava.auth({ body: { code } })).data(),
})

export default () => {
  const useMockApi = localStorage.getItem(ActivitiesTypes.USE_MOCK_API) === 'true'
  return {
    meta: meta(useMockApi),
    strava: strava(useMockApi),
    map: map(useMockApi),
    graphql: graphql(useMockApi),
  }
}
