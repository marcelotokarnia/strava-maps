import forge from 'mappersmith'
// import getActivitiesQuery from '../graphql/query/getActivities.gql'
import jsonMiddleware from 'mappersmith/middlewares/encode-json'

const API = forge({
  host: `${window.location.protocol}//${window.location.host}`,
  middleware: [jsonMiddleware],
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
}) as any

export default API

export const strava = {
  getActivities: async () =>
    (
      await API.graphql.getData({
        body: {
          query: `query($token: String!) {
          getStravaActivities(token: $token) {
            id
            name
            distance
            time {
              moving
              elapsed
            }
            elevation {
              gain
            }
            type
            startDate
            startPosition {
              lat
              lng
            }
            kudos
            polyline
            speed {
              average
              max
            }
            heartrate {
              average
              max
            }
            prs
            achievements
          }
        }`,
          variables: { token: window.localStorage.getItem('access_token') },
        },
      })
    ).data().data.getStravaActivities,
}
