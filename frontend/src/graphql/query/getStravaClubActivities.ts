const gql = String.raw
export default gql`
  query($id: String!) {
    getStravaClubActivities(id: $id) {
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
      athleteName
    }
  }
`
