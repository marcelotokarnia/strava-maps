import { ActivitiesTypes } from 'interfaces/store/actions'
import developmentAPI from 'api/development'
import productionAPI from 'api/production'
import raw from 'raw.macro'

const API = useMockApi => (useMockApi ? developmentAPI : productionAPI)

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

export default () => {
  const useMockApi = localStorage.getItem(ActivitiesTypes.USE_MOCK_API) === 'true'
  return {
    strava: API(useMockApi).strava,
    map: map(useMockApi),
    graphql: graphql(useMockApi),
  }
}
