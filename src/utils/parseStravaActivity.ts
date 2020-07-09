import { LatLng, ParsedLatLng, StravaActivity } from '../interfaces/clients/strava'

import { ParsedStravaActivity } from '@tokks/strava'

export const parseLatLng = (latlng?: LatLng): ParsedLatLng =>
  latlng && { lat: latlng[0], lng: latlng[1] }

export default (activity: StravaActivity): ParsedStravaActivity => ({
  achievements: activity?.achievement_count,
  athleteId: '' + activity?.athlete?.id,
  distance: activity?.distance,
  elevation: { gain: activity?.total_elevation_gain },
  heartrate: {
    average: activity?.average_heartrate,
    max: activity?.max_heartrate,
  },
  id: '' + activity?.id,
  kudos: activity?.kudos_count,
  name: activity?.name,
  polyline: activity?.map?.summary_polyline,
  prs: activity?.pr_count,
  speed: { average: activity?.average_speed, max: activity?.max_speed },
  startDate: activity?.start_date,
  startPosition: parseLatLng(activity?.start_latlng),
  time: {
    moving: activity?.moving_time,
    elapsed: activity?.elapsed_time,
  },
  type: activity?.type,
})
