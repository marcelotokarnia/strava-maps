import API, { strava } from '../api'
import {
  HIGHLIGHT_ACTIVITY,
  SHOW_ACTIVITY_DETAILS,
  SHOW_ACTIVITY_MARKER,
  UPDATE_ACTIVITIES,
} from './reducers/activities'
import { INIT_MAP } from './reducers/map'

export const initMap = ({ defaultCenter }) => ({
  type: INIT_MAP,
  payload: { defaultCenter },
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

export const fetchActivities = (code: string) => async dispatch => {
  const response = (await API.strava.auth({ body: { code } })).data()
  const { access_token, expires_in } = response
  window.localStorage.setItem('access_token', access_token)
  window.localStorage.setItem('expires_at', '' + (expires_in * 1000 + new Date().getTime()))
  const activities = await strava.getActivities()
  dispatch(updateActivities({ activities }))
  const firstActivityWithPosition = activities.find(({ startPosition }) => Boolean(startPosition))
  if (firstActivityWithPosition) {
    dispatch(initMap({ defaultCenter: firstActivityWithPosition.startPosition }))
  }
}
