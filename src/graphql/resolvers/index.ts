import getStravaActivities from '@src/graphql/resolvers/query/getStravaActivities'
import getStravaActivityDetails from '@src/graphql/resolvers/query/getStravaActivityDetails'
import getStravaClubActivities from '@src/graphql/resolvers/query/getStravaClubActivities'
import getStravaProfile from '@src/graphql/resolvers/query/getStravaProfile'

export default {
  Query: {
    getStravaActivities,
    getStravaProfile,
    getStravaActivityDetails,
    getStravaClubActivities,
  },
}
