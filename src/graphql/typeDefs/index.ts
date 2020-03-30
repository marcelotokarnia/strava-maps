import { gql } from 'apollo-server-express'
export default gql`
  type Query {
    getStravaActivities: [Activity]!
  }

  type Elevation {
    gain: Float
  }

  type ParsedLatLng {
    lat: Float
    lng: Float
  }

  type Time {
    moving: Int
    elapsed: Int
  }

  type AverageMax {
    average: Float
    max: Float
  }

  type Activity {
    id: ID
    name: String
    distance: Float
    time: Time
    elevation: Elevation
    type: String
    startDate: String
    startPosition: ParsedLatLng
    kudos: Int
    polyline: String
    speed: AverageMax
    heartrate: AverageMax
    prs: Int
    achievements: Int
  }
`
