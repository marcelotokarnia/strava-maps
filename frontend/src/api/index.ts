import forge from 'mappersmith'
import getActivitiesQuery from '../graphql/query/getActivities.gql'

const API = forge({
  host: `${window.location.protocol}//${window.location.host}`,
  resources: {
    strava: {
      auth: {
        method: 'post',
        path: '/strava/auth',
      },
    },
    graphql: {
      getData: {
        method: 'post',
        path: '/graphql',
      },
    },
  },
})

export default API

export const strava = {
  getActivities: () =>
    API.graphql.getData({
      body: {
        query: getActivitiesQuery,
        variables: { token: window.localStorage.getItem('access_token') },
      },
    }),
}
