import stravaAthleteActivities from '../fixtures/stravaAthleteActivities'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE

const mappersmithResponse = body => ({
  data: () => body,
})

const API = {
  strava: {
    auth: () =>
      mappersmithResponse({
        access_token: 'mocked',
        expires_in: new Date().getTime() + 6 * HOUR,
      }),
  },
  graphql: {
    getData: () => mappersmithResponse({ data: { getStravaActivities: stravaAthleteActivities } }),
  },
}

export default API
