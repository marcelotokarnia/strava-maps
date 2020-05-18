import { ActivitiesState, ReduxActivity } from '../../interfaces/store/reducers'
import { adjust, assoc, clone, findIndex, mergeDeepRight, propEq } from 'ramda'
import { ActivitiesActions } from '../actions'
import { ActivitiesTypes } from '../../interfaces/store/actions'
import filterActivities from '../../utils/filterActivities'
import transformActivities from '../../utils/transformActivities'

const initialState: ActivitiesState = {
  details: {},
  fetchedActivities: [],
  activitiesList: [],
  useMockApi: localStorage.getItem(ActivitiesTypes.USE_MOCK_API) === 'true',
  filter: {
    type: {
      run: true,
      bike: true,
      workout: true,
    },
  },
}

export default (state = initialState, action: ActivitiesActions): ActivitiesState => {
  let activitiesList
  let activityIndex

  switch (action.type) {
    case ActivitiesTypes.REGISTER_DETAILS: {
      return mergeDeepRight(state, {
        details: {
          [action.payload.activityDetails.id]: action.payload.activityDetails,
        },
      })
    }
    case ActivitiesTypes.UPDATE_FILTER: {
      return mergeDeepRight(state, {
        filter: action.payload,
        activitiesList: filterActivities(state.fetchedActivities, action.payload),
      })
    }
    case ActivitiesTypes.ANIMATE_ACTIVITY: {
      activitiesList = state.activitiesList
      activityIndex = findIndex(propEq('id', action.payload.id), activitiesList)
      return mergeDeepRight(state, {
        activitiesList: adjust<ReduxActivity>(
          activityIndex,
          assoc('animationPercentage', action.payload.animationPercentage),
          activitiesList
        ),
      })
    }
    case ActivitiesTypes.HIGHLIGHT_SIDELIST: {
      activitiesList = state.activitiesList
      activityIndex = findIndex(propEq('id', action.payload.id), activitiesList)
      return mergeDeepRight(state, {
        activitiesList: adjust<ReduxActivity>(
          activityIndex,
          assoc('highlightSidelist', action.payload.highlight),
          activitiesList
        ),
      })
    }
    case ActivitiesTypes.USE_MOCK_API: {
      localStorage.setItem(ActivitiesTypes.USE_MOCK_API, JSON.stringify(action.payload.useMockApi))
      return mergeDeepRight(state, {
        useMockApi: action.payload.useMockApi,
      })
    }
    case ActivitiesTypes.UPDATE_ACTIVITIES: {
      const fetchedActivities = transformActivities(action.payload.activities)
      return mergeDeepRight(state, {
        fetchedActivities,
        activitiesList: filterActivities(fetchedActivities, state.filter),
      })
    }
    case ActivitiesTypes.HIGHLIGHT_ACTIVITY: {
      activitiesList = state.activitiesList
      activityIndex = findIndex(propEq('id', action.payload.id), activitiesList)
      return mergeDeepRight(state, {
        activitiesList: adjust<ReduxActivity>(
          activityIndex,
          assoc('isHighlighted', action.payload.highlight),
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
        activitiesList: adjust<ReduxActivity>(
          activityIndex,
          assoc('showMarker', action.payload.show),
          activitiesList
        ),
      })
    }
    case ActivitiesTypes.SHOW_ACTIVITY_DETAILS: {
      activitiesList = state.activitiesList
      activityIndex = findIndex(propEq('id', action.payload.id), activitiesList)
      return mergeDeepRight(state, {
        activitiesList: adjust<ReduxActivity>(
          activityIndex,
          assoc('showDetails', action.payload.show),
          activitiesList
        ),
      })
    }
    default:
      return state
  }
}
