const gql = String.raw
export default gql`
  query($id: String!) {
    getStravaActivityDetails(id: $id) {
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
