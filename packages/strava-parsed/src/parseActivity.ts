import { LatLng, SummaryActivity } from '@tokks/strava/typings'
import { ParsedActivity, ParsedLatLng } from './typings'

export const parseLatLng = (latlng?: LatLng): ParsedLatLng | null =>
  (latlng && { lat: latlng[0], lng: latlng[1] }) || null

export default (activity: SummaryActivity): ParsedActivity => ({
  achievements: activity?.achievement_count,
  athleteId: '' + activity?.athlete?.id,
  distance: activity?.distance,
  elevation: { gain: activity?.total_elevation_gain },
  heartrate: {
    average: (activity as any)?.average_heartrate,
    max: (activity as any)?.max_heartrate,
  },
  id: '' + activity?.id,
  kudos: activity?.kudos_count,
  name: activity?.name,
  polyline: activity?.map?.summary_polyline,
  prs: (activity as any)?.pr_count,
  speed: { average: activity?.average_speed, max: activity?.max_speed },
  startDate: activity?.start_date,
  startPosition: parseLatLng(activity?.start_latlng),
  time: {
    moving: activity?.moving_time,
    elapsed: activity?.elapsed_time,
  },
  type: activity?.type,
})
