import getStravaActivities from './getStravaActivities'
export default (id: string) => getStravaActivities.find(({ id: activityId }) => id === activityId)
