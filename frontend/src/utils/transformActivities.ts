import { decode } from '@mapbox/polyline'
import { ParsedStravaActivity } from '../interfaces/activities'

export default (activities: Array<ParsedStravaActivity>) =>
  activities.map(activity => {
    activity.polyline =
      activity.polyline && decode(activity.polyline).map(([lat, lng]) => ({ lat, lng }))
    return activity
  })
