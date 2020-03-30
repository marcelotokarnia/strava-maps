import API, { strava } from '../api'
import {
  HIGHLIGHT_ACTIVITY,
  SHOW_ACTIVITY_DETAILS,
  SHOW_ACTIVITY_MARKER,
  UPDATE_ACTIVITIES,
  USE_MOCK_API,
} from './reducers/activities'
import { INIT_MAP } from './reducers/map'

export const initMap = ({ defaultCenter }) => ({
  type: INIT_MAP,
  payload: { defaultCenter },
})

export const useMockAPI = ({ useMockApi }) => ({
  type: USE_MOCK_API,
  payload: {
    useMockApi,
  },
})

export const updateActivities = ({ activities }) => ({
  type: UPDATE_ACTIVITIES,
  payload: { activities },
})

export const changeHighlight = ({ highlight, id }) => ({
  type: HIGHLIGHT_ACTIVITY,
  payload: { highlight, id },
})

export const showActivityDetails = ({ show, id }) => ({
  type: SHOW_ACTIVITY_DETAILS,
  payload: { show, id },
})

export const showActivityMarker = ({ show, id }) => ({
  type: SHOW_ACTIVITY_MARKER,
  payload: { show, id },
})

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

export const fetchActivities = (code: string, useMockApi: boolean) => async dispatch => {
  code && (await API(useMockApi).strava.auth({ body: { code } }))
  const activities = await strava(useMockApi).getActivities()
  dispatch(updateActivities({ activities }))
  const firstActivityWithPosition = activities.find(({ startPosition }) => Boolean(startPosition))
  if (firstActivityWithPosition) {
    dispatch(initMap({ defaultCenter: firstActivityWithPosition.startPosition }))
  }
}
