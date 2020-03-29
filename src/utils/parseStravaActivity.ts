import { LatLng, ParsedLatLng, StravaActivity } from '../interfaces/clients/strava'

import { ParsedStravaActivity } from '../../frontend/src/interfaces/activities'

export const parseLatLng = (latlng?: LatLng): ParsedLatLng =>
  latlng && { lat: latlng[0], lng: latlng[1] }

export default (activity: StravaActivity): ParsedStravaActivity => ({
  id: '' + activity?.id,
  name: activity?.name,
  distance: activity?.distance,
  time: {
    moving: activity?.moving_time,
    elapsed: activity?.elapsed_time,
  },
  elevation: { gain: activity?.total_elevation_gain },
  type: activity?.type,
  startDate: activity?.start_date,
  startPosition: parseLatLng(activity?.start_latlng),
  kudos: activity?.kudos_count,
  polyline: activity?.map?.summary_polyline,
  speed: { average: activity?.average_speed, max: activity?.max_speed },
  heartrate: {
    average: activity?.average_heartrate,
    max: activity?.max_heartrate,
  },
  prs: activity?.pr_count,
  achievements: activity?.achievement_count,
})
