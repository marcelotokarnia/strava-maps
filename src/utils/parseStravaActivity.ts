export default (activity: StravaActivity): ParsedStravaActivity => ({
  name: activity?.name,
  distance: activity?.distance,
  time: {
    moving: activity?.moving_time,
    elapsed: activity?.elapsed_time,
  },
  elevation: { gain: activity?.total_elevation_gain },
  type: activity?.type,
  startDate: activity?.start_date,
  startPosition: activity?.start_latlng,
  kudos: activity?.kudos_count,
  polyline: activity?.map?.summary_polyline,
  speed: { average: activity?.average_speed, max: activity?.max_speed },
  heartrate: {
    average: activity?.average_heartrate,
    max: activity?.max_heartrate,
  },
  pr: activity.pr_count,
})
