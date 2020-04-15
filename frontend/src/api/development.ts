import getActivityDetails from '../fixtures/getActivityDetails'
import getStravaActivities from '../fixtures/getStravaActivities'
import getStravaProfile from '../fixtures/getStravaProfile'

const mappersmithResponse = body => ({
  data: () => body,
})

const API = {
  strava: {
    auth: async () => ({}),
  },
  graphql: {
    getData: ({ body: { variables: { id } = { id: '' } } }) =>
      mappersmithResponse({
        data: {
          getActivityDetails: getActivityDetails(id),
          getStravaActivities,
          getStravaProfile,
        },
      }),
  },
}

export default API
