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
  map: {
    save: async () => mappersmithResponse({ uuid: '8231a895-2e44-431e-9e64-dddaf505cfd0' }),
    get: async () => ({}),
  },
  graphql: {
    getData: ({ body: { variables: { id } = { id: '' } } }) =>
      mappersmithResponse({
        data: {
          getStravaActivityDetails: getActivityDetails(id),
          getStravaActivities,
          getStravaProfile,
        },
      }),
  },
}

export default API
