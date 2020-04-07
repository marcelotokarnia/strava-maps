import {
  ActionDispatcher,
  AddProfile,
  AnimateActivity,
  HighlightActivity,
  HighligthOnSidelistAction,
  InitMapAction,
  ShowActivityDetails,
  ShowActivityMarker,
  UpdateActivitiesAction,
  UseMockApi,
} from '../interfaces/store/actions'
import {
  ANIMATE_ACTIVITY,
  HIGHLIGHT_ACTIVITY,
  HIGHLIGHT_SIDELIST,
  SHOW_ACTIVITY_DETAILS,
  SHOW_ACTIVITY_MARKER,
  UPDATE_ACTIVITIES,
  USE_MOCK_API,
} from './reducers/activities'
import API, { strava } from '../api'
import { ADD_PROFILE } from './reducers/profiles'
import { INIT_MAP } from './reducers/map'

export const initMap: ActionDispatcher<InitMapAction> = ({ defaultCenter }) => ({
  type: INIT_MAP,
  payload: { defaultCenter },
})

export const toggleMockApi: ActionDispatcher<UseMockApi> = ({ useMockApi }) => ({
  type: USE_MOCK_API,
  payload: {
    useMockApi,
  },
})

export const addProfile: ActionDispatcher<AddProfile> = ({ profile }) => ({
  type: ADD_PROFILE,
  payload: { profile },
})

export const updateActivities: ActionDispatcher<UpdateActivitiesAction> = ({ activities }) => ({
  type: UPDATE_ACTIVITIES,
  payload: { activities },
})

export const changeHighlight: ActionDispatcher<HighlightActivity> = ({ highlight, id }) => ({
  type: HIGHLIGHT_ACTIVITY,
  payload: { highlight, id },
})

export const showActivityDetails: ActionDispatcher<ShowActivityDetails> = ({ show, id }) => ({
  type: SHOW_ACTIVITY_DETAILS,
  payload: { show, id },
})

export const showActivityMarker: ActionDispatcher<ShowActivityMarker> = ({ show, id }) => ({
  type: SHOW_ACTIVITY_MARKER,
  payload: { show, id },
})

export const changeActivityAnimation: ActionDispatcher<AnimateActivity> = ({
  animationPercentage,
  id,
}) => ({
  type: ANIMATE_ACTIVITY,
  payload: { animationPercentage, id },
})

export const highlightOnSidelist: ActionDispatcher<HighligthOnSidelistAction> = ({
  id,
  highlight,
}) => ({
  type: HIGHLIGHT_SIDELIST,
  payload: { id, highlight },
})

export const findOnSidelist = ({ id }) => async dispatch => {
  dispatch(highlightOnSidelist({ id, highlight: true }))
  dispatch(showActivityDetails({ id, show: true }))
  setTimeout(() => {
    dispatch(highlightOnSidelist({ id, highlight: false }))
  }, 1000)
}

export const highlightActivity = ({ id }) => async dispatch => {
  let highlight = true
  const reference = setInterval(() => {
    dispatch(changeHighlight({ highlight: highlight = !highlight, id }))
  }, 100)
  setTimeout(() => {
    clearInterval(reference)
    dispatch(changeHighlight({ highlight: false, id }))
  }, 1000)
}

export const animateActivity = ({ id }) => async dispatch => {
  let animationPercentage = 0
  const animationTime = 8500
  const animationFrames = 70
  const reference = setInterval(() => {
    dispatch(
      changeActivityAnimation({
        animationPercentage: animationPercentage += 1 / animationFrames,
        id,
      })
    )
  }, animationTime / (animationFrames + 4))
  setTimeout(() => {
    clearInterval(reference)
    dispatch(
      changeActivityAnimation({
        animationPercentage: 0,
        id,
      })
    )
  }, animationTime)
}

export const fetchActivities = (code: string, useMockApi: boolean) => async dispatch => {
  code && (await API(useMockApi).strava.auth({ body: { code } }))
  const { getStravaActivities: activities, getStravaProfile: profile } = await strava(
    useMockApi
  ).getActivities()
  dispatch(addProfile({ profile }))
  dispatch(updateActivities({ activities }))
  const firstActivityWithPosition = activities.find(({ startPosition }) => Boolean(startPosition))
  if (firstActivityWithPosition) {
    dispatch(initMap({ defaultCenter: firstActivityWithPosition.startPosition }))
  }
}
