import stravaAthleteActivities from '../fixtures/stravaAthleteActivities'

const mappersmithResponse = body => ({
  data: () => body,
})

const API = {
  strava: {
    auth: async () => {},
  },
  graphql: {
    getData: () => mappersmithResponse({ data: { getStravaActivities: stravaAthleteActivities } }),
  },
}

export default API
