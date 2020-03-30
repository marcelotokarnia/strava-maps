import developmentAPI from './development'
import productionAPI from './production'
import raw from 'raw.macro'

const API = useMockApi => (useMockApi ? developmentAPI : productionAPI)

export default API
export const strava = useMockApi => ({
  getActivities: async () =>
    (
      await API(useMockApi).graphql.getData({
        body: {
          query: raw('../graphql/query/getActivities.gql'),
        },
      })
    ).data().data.getStravaActivities,
})
