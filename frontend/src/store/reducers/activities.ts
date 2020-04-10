import { assocPath, clone, findIndex, mergeDeepRight, propEq } from 'ramda'
import { ActivitiesActions } from '../actions'
import { ActivitiesState } from '../../interfaces/store/reducers'
import { ActivitiesTypes } from '../../interfaces/store/actions'
import transformActivities from '../../utils/transformActivities'

const initialState: ActivitiesState = {
  activitiesList: [],
  useMockApi: process.env.NODE_ENV !== 'production',
}

export default (state = initialState, action: ActivitiesActions): ActivitiesState => {
  let activitiesList
  let activityIndex

  switch (action.type) {
    case ActivitiesTypes.ANIMATE_ACTIVITY: {
      activitiesList = state.activitiesList
      activityIndex = findIndex(propEq('id', action.payload.id), activitiesList)
      return mergeDeepRight(state, {
        activitiesList: assocPath(
          [activityIndex, 'animationPercentage'],
          action.payload.animationPercentage,
          activitiesList
        ),
      })
    }
    case ActivitiesTypes.HIGHLIGHT_SIDELIST: {
      activitiesList = state.activitiesList
      activityIndex = findIndex(propEq('id', action.payload.id), activitiesList)
      return mergeDeepRight(state, {
        activitiesList: assocPath(
          [activityIndex, 'highlightSidelist'],
          action.payload.highlight,
          activitiesList
        ),
      })
    }
    case ActivitiesTypes.USE_MOCK_API: {
      return mergeDeepRight(state, {
        useMockApi: action.payload.useMockApi,
      })
    }
    case ActivitiesTypes.UPDATE_ACTIVITIES: {
      return mergeDeepRight(state, {
        activitiesList: transformActivities(action.payload.activities),
      })
    }
    case ActivitiesTypes.HIGHLIGHT_ACTIVITY: {
      activitiesList = state.activitiesList
      activityIndex = findIndex(propEq('id', action.payload.id), activitiesList)
      return mergeDeepRight(state, {
        activitiesList: assocPath(
          [activityIndex, 'isHighlighted'],
          action.payload.highlight,
          activitiesList
        ),
      })
    }
    case ActivitiesTypes.SHOW_ACTIVITY_MARKER: {
      activitiesList = clone(state.activitiesList)
      activityIndex = findIndex(propEq('id', action.payload.id), activitiesList)
      if (action.payload.show) {
        activitiesList = activitiesList.map(activity => ({ ...activity, showMarker: false }))
      }

      return mergeDeepRight(state, {
        activitiesList: assocPath(
          [activityIndex, 'showMarker'],
          action.payload.show,
          activitiesList
        ),
      })
    }
    case ActivitiesTypes.SHOW_ACTIVITY_DETAILS: {
      activitiesList = state.activitiesList
      activityIndex = findIndex(propEq('id', action.payload.id), activitiesList)
      return mergeDeepRight(state, {
        activitiesList: assocPath(
          [activityIndex, 'showDetails'],
          action.payload.show,
          activitiesList
        ),
      })
    }
    default:
      return state
  }
}
