import getStravaActivities from 'graphql/resolvers/query/getStravaActivities'
import getStravaActivityDetails from 'graphql/resolvers/query/getStravaActivityDetails'
import getStravaProfile from 'graphql/resolvers/query/getStravaProfile'

export default {
  Query: {
    getStravaActivities,
    getStravaProfile,
    getStravaActivityDetails,
  },
}
