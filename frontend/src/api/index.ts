// import getActivitiesQuery from '../graphql/query/getActivities.gql'

import developmentAPI from './development'
import productionAPI from './production'
const API = process.env.NODE_ENV === 'production' ? productionAPI : developmentAPI

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
