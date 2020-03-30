import {
  ActivitiesActionTypes,
  ActivitiesState,
  AnimateActivity,
  HighlightActivity,
  ShowActivityDetails,
  ShowActivityMarker,
  UpdateActivitiesAction,
  UseMockApi,
} from '../../interfaces/store/reducers'
import { assocPath, clone, findIndex, mergeDeepRight, propEq } from 'ramda'
import transformActivities from '../../utils/transformActivities'

export const ANIMATE_ACTIVITY = 'store.action.activities.animate'
export const UPDATE_ACTIVITIES = 'store.action.activities.update'
export const HIGHLIGHT_ACTIVITY = 'store.action.activities.highlight'
export const SHOW_ACTIVITY_MARKER = 'store.action.activities.show_marker'
export const SHOW_ACTIVITY_DETAILS = 'store.action.activities.show_details'
export const USE_MOCK_API = 'store.action.activities.use_mock_api'

const initialState: ActivitiesState = {
  activitiesList: [],
  useMockApi: process.env.NODE_ENV !== 'production',
}

export default (
  state = initialState,
  { type, payload }: ActivitiesActionTypes
): ActivitiesState => {
  let activitiesList
  let activityIndex
  switch (type) {
    case ANIMATE_ACTIVITY: {
      activitiesList = state.activitiesList
      activityIndex = findIndex(
        propEq('id', (payload as AnimateActivity['payload']).id),
        activitiesList
      )
      return mergeDeepRight(state, {
        activitiesList: assocPath(
          [activityIndex, 'animationPercentage'],
          (payload as AnimateActivity['payload']).animationPercentage,
          activitiesList
        ),
      })
    }
    case USE_MOCK_API: {
      return mergeDeepRight(state, {
        useMockApi: (payload as UseMockApi['payload']).useMockApi,
      })
    }
    case UPDATE_ACTIVITIES: {
      return mergeDeepRight(state, {
        activitiesList: transformActivities(
          (payload as UpdateActivitiesAction['payload']).activities
        ),
      })
    }
    case HIGHLIGHT_ACTIVITY: {
      activitiesList = state.activitiesList
      activityIndex = findIndex(
        propEq('id', (payload as HighlightActivity['payload']).id),
        activitiesList
      )
      return mergeDeepRight(state, {
        activitiesList: assocPath(
          [activityIndex, 'isHighlighted'],
          (payload as HighlightActivity['payload']).highlight,
          activitiesList
        ),
      })
    }
    case SHOW_ACTIVITY_MARKER: {
      activitiesList = clone(state.activitiesList)
      activityIndex = findIndex(
        propEq('id', (payload as ShowActivityMarker['payload']).id),
        activitiesList
      )
      if ((payload as ShowActivityMarker['payload']).show) {
        activitiesList = activitiesList.map(activity => ({ ...activity, showMarker: false }))
      }

      return mergeDeepRight(state, {
        activitiesList: assocPath(
          [activityIndex, 'showMarker'],
          (payload as ShowActivityMarker['payload']).show,
          activitiesList
        ),
      })
    }
    case SHOW_ACTIVITY_DETAILS: {
      activitiesList = state.activitiesList
      activityIndex = findIndex(
        propEq('id', (payload as ShowActivityDetails['payload']).id),
        activitiesList
      )
      return mergeDeepRight(state, {
        activitiesList: assocPath(
          [activityIndex, 'showDetails'],
          (payload as ShowActivityDetails['payload']).show,
          activitiesList
        ),
      })
    }
    default:
      return state
  }
}
