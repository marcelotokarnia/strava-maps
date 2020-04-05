import { gql } from 'apollo-server-express'
export default gql`
  type Query {
    "List of authenticated user's activities"
    getStravaActivities: [Activity]!
    "authenticated user's details"
    getStravaProfile: Profile
  }

  type Profile {
    id: ID
    username: String
    name: String
    createdAt: String
    picture: String
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
    athleteId: String
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
