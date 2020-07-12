import { ActivitiesTypes } from 'interfaces/store/actions'
import { API as APIType } from 'interfaces/api'
import developmentAPI from 'api/development'
import productionAPI from 'api/production'
import raw from 'raw.macro'

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
          query: raw('../graphql/query/getActivities.gql'),
          variables: { mapId },
        },
      })
    ).data().data,
  getActivityDetails: async id =>
    (
      await API(useMockApi).graphql.getData({
        body: {
          query: raw('../graphql/query/getActivityDetails.gql'),
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
