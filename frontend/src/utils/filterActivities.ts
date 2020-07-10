import { ActivitiesFilter, ReduxActivity } from 'interfaces/store/reducers'
import { reject } from 'ramda'

export default (
  fetchedActivities: Array<ReduxActivity>,
  filters: ActivitiesFilter
): Array<ReduxActivity> => {
  let activities = fetchedActivities
  if (!filters.type.run) {
    activities = reject(act => act.type === 'Run', activities)
  }
  if (!filters.type.bike) {
    activities = reject(act => act.type === 'Ride', activities)
  }
  if (!filters.type.workout) {
    activities = reject(act => act.type !== 'Run' && act.type !== 'Ride', activities)
  }
  return activities
}
