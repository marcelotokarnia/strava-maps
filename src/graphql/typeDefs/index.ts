import { gql } from 'apollo-server-express'
export default gql`
  type Query {
    getStravaActivities: [Activity]!
  }

  type Activity {
    name: String
    distance: Float
    moving_time: Int
    elapsed_time: Int
  }
`
