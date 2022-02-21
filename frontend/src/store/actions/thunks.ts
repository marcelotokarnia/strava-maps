import { ActivitiesActions, MapActions, ProfilesActions } from './'
import {
  getOlaIsaacActivitiesV4,
  getOlaIsaacActivitiesV5,
  olaIsaacActivitiesV1,
  olaIsaacActivitiesV3,
} from 'olaisaac/activities'
import API from 'api'
import { assoc } from 'ramda'
import { Map } from 'interfaces/map'
import { modifyPolyline } from 'utils/transformActivities'
import olaIsaacUsers from 'olaisaac/users'
import { v4Activities } from 'olaisaac/v4Goal'

const clubIsaac = '868099'

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

export const stravaAuth = (code: string, callback: any) => async () => {
  code && (await API().strava.auth(code))
  callback && callback()
}

export const saveMap = (map: Map, callback?: any) => async dispatch => {
  const { mapId } = await API().map.save({ body: map })
  dispatch(MapActions.showSavedUrlModal({ mapId }))
  callback()
}

export const fetchColabRoute = ({ id }: { id: string }) => async dispatch => {
  const colabPolyline = await API().map.getColabRoute(id)
  const colabRoute = modifyPolyline(colabPolyline)
  dispatch(MapActions.recordColabRoute({ colabRoute, id }))
  const {
    getStravaActivities: activities,
    getStravaProfile: profile,
  } = await API().graphql.getActivities({ mapId: null })
  dispatch(ProfilesActions.addProfile({ profile }))
  dispatch(
    ActivitiesActions.updateActivities({
      activities: activities.map((act, i) =>
        assoc('polyline', colabRoute.slice(i * 300, (i + 1) * 300), act)
      ),
    })
  )
}

export const fetchActivityDetails = (id: string) => async dispatch => {
  const { getStravaActivityDetails: activityDetails } = await API().graphql.getActivityDetails(id)
  dispatch(ActivitiesActions.registerDetails({ activityDetails }))
  dispatch(MapActions.initMap({ defaultCenter: activityDetails.startPosition }))
}

export const fetchActivities = (mapId?: string) => async dispatch => {
  const {
    getStravaActivities: activities,
    getStravaProfile: profile,
  } = await API().graphql.getActivities({ mapId })
  dispatch(ProfilesActions.addProfile({ profile }))
  dispatch(ActivitiesActions.updateActivities({ activities }))
  const firstActivityWithPosition = activities.find(({ startPosition }) => Boolean(startPosition))
  if (firstActivityWithPosition) {
    dispatch(MapActions.initMap({ defaultCenter: firstActivityWithPosition.startPosition }))
  }
}

export const fetchOlaIsaacV1 = () => dispatch => {
  olaIsaacUsers.forEach(u => dispatch(ProfilesActions.addProfile({ profile: u })))
  dispatch(ActivitiesActions.updateActivities({ activities: olaIsaacActivitiesV1 }))
  dispatch(MapActions.initMap({ defaultCenter: { lat: -23.564652, lng: -46.667798 } }))
}

export const fetchOlaIsaacV3 = () => dispatch => {
  olaIsaacUsers.forEach(u => dispatch(ProfilesActions.addProfile({ profile: u })))
  dispatch(ActivitiesActions.updateActivities({ activities: olaIsaacActivitiesV3 }))
  dispatch(MapActions.initMap({ defaultCenter: { lat: -23.564652, lng: -46.667798 } }))
}

export const fetchOlaIsaacV4 = () => async dispatch => {
  olaIsaacUsers.forEach(u => dispatch(ProfilesActions.addProfile({ profile: u })))
  const { activities, center } = getOlaIsaacActivitiesV4(v4Activities as any)

  dispatch(
    ActivitiesActions.updateActivities({
      activities,
    })
  )
  dispatch(MapActions.initMap({ defaultCenter: { lat: center.lat, lng: center.lng } }))
}

export const fetchOlaIsaacV5 = () => async dispatch => {
  olaIsaacUsers.forEach(u => dispatch(ProfilesActions.addProfile({ profile: u })))
  const { getStravaClubActivities } = await API().graphql.getStravaClubActivities(clubIsaac)
  const idxCut = getStravaClubActivities.findIndex(
    ({ athleteName, distance, elevation: { gain }, time: { moving, elapsed } }) =>
      athleteName === 'Ana Clara M.' &&
      distance === 6072.8 &&
      gain === 0 &&
      moving === 2400 &&
      elapsed === 2540
  )
  const { activities, center, distance } = getOlaIsaacActivitiesV5(
    getStravaClubActivities.filter((_, idx) => idx <= idxCut)
  )

  dispatch(
    ActivitiesActions.updateActivities({
      activities,
    })
  )
  dispatch(ActivitiesActions.updateChallengeProgress(distance))
  dispatch(MapActions.initMap({ defaultCenter: { lat: center.lat, lng: center.lng } }))
}
