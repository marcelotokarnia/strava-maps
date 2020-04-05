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
    getData: () =>
      mappersmithResponse({
        data: {
          getStravaActivities,
          getStravaProfile,
        },
      }),
  },
}

export default API
