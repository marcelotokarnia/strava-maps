const gql = String.raw
export default gql`
  query($mapId: String) {
    getStravaProfile(mapId: $mapId) {
      id
      username
      name
      createdAt
      picture
    }
    getStravaActivities(mapId: $mapId) {
      id
      athleteId
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
  }
`
