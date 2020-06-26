import { ActivitiesActions, MapActions, ProfilesActions } from './'
import API from '../../api'
import { assoc } from 'ramda'
import { Map } from '../../interfaces/map'
import { modifyPolyline } from '../../utils/transformActivities'

export const findOnSidelist = ({ id }) => async dispatch => {
  dispatch(ActivitiesActions.highlightOnSidelist({ id, highlight: true }))
  dispatch(ActivitiesActions.showActivityDetails({ id, show: true }))
  setTimeout(() => {
    dispatch(ActivitiesActions.highlightOnSidelist({ id, highlight: false }))
  }, 1000)
}

export const highlightActivity = ({ id }) => async dispatch => {
  let highlight = true
  const reference = setInterval(() => {
    dispatch(ActivitiesActions.changeHighlight({ highlight: highlight = !highlight, id }))
  }, 100)
  setTimeout(() => {
    clearInterval(reference)
    dispatch(ActivitiesActions.changeHighlight({ highlight: false, id }))
  }, 1000)
}

export const animateActivity = ({ id }) => async dispatch => {
  let animationPercentage = 0
  const animationTime = 8500
  const animationFrames = 70
  const reference = setInterval(() => {
    dispatch(
      ActivitiesActions.changeActivityAnimation({
        animationPercentage: animationPercentage += 1 / animationFrames,
        id,
      })
    )
  }, animationTime / (animationFrames + 4))
  setTimeout(() => {
    clearInterval(reference)
    dispatch(
      ActivitiesActions.changeActivityAnimation({
        animationPercentage: 0,
        id,
      })
    )
  }, animationTime)
}

export const stravaAuth = (code: string, useMockApi: boolean, callback: any) => async () => {
  !useMockApi && code && (await API(useMockApi).strava.auth({ body: { code } }))
  callback && callback()
}

export const saveMap = (map: Map, useMockApi: boolean, callback?: any) => async dispatch => {
  const { mapId } = await API(useMockApi).map.save({ body: map })
  dispatch(MapActions.showSavedUrlModal({ mapId }))
  callback()
}

export const fetchColabRoute = ({
  useMockApi,
  id,
}: {
  id: string
  useMockApi: boolean
}) => async dispatch => {
  const colabPolyline = await API(useMockApi).map.getColabRoute(id)
  const colabRoute = modifyPolyline(colabPolyline)
  dispatch(MapActions.recordColabRoute({ colabRoute, id }))
  const { getStravaActivities: activities, getStravaProfile: profile } = await API(
    useMockApi
  ).graphql.getActivities({ mapId: null })
  dispatch(ProfilesActions.addProfile({ profile }))
  dispatch(
    ActivitiesActions.updateActivities({
      activities: activities.map((act, i) =>
        assoc('polyline', colabRoute.slice(i * 300, (i + 1) * 300), act)
      ),
    })
  )
}

export const fetchActivityDetails = (id: string, useMockApi: boolean) => async dispatch => {
  const { getStravaActivityDetails: activityDetails } = await API(
    useMockApi
  ).graphql.getActivityDetails(id)
  dispatch(ActivitiesActions.registerDetails({ activityDetails }))
  dispatch(MapActions.initMap({ defaultCenter: activityDetails.startPosition }))
}

export const fetchActivities = (useMockApi: boolean, mapId?: string) => async dispatch => {
  const { getStravaActivities: activities, getStravaProfile: profile } = await API(
    useMockApi
  ).graphql.getActivities({ mapId })
  dispatch(ProfilesActions.addProfile({ profile }))
  dispatch(ActivitiesActions.updateActivities({ activities }))
  const firstActivityWithPosition = activities.find(({ startPosition }) => Boolean(startPosition))
  if (firstActivityWithPosition) {
    dispatch(MapActions.initMap({ defaultCenter: firstActivityWithPosition.startPosition }))
  }
}
