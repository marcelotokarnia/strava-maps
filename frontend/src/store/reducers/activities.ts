import { ActivitiesState, ReduxActivity } from 'interfaces/store/reducers'
import { adjust, assoc, clone, findIndex, mergeDeepRight, propEq } from 'ramda'
import { ActivitiesActions } from 'store/actions'
import { ActivitiesTypes } from 'interfaces/store/actions'
import filterActivities from 'utils/filterActivities'
import transformActivities from 'utils/transformActivities'

const initialState: ActivitiesState = {
  activitiesList: [],
  details: {},
  fetchedActivities: [],
  filter: {
    type: {
      run: true,
      bike: true,
      workout: true,
    },
  },
  useMockApi: localStorage.getItem(ActivitiesTypes.USE_MOCK_API) === 'true',
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
      }) as ActivitiesState
    }
    case ActivitiesTypes.UPDATE_FILTER: {
      return mergeDeepRight(state, {
        filter: action.payload,
        activitiesList: filterActivities(state.fetchedActivities, action.payload),
      }) as ActivitiesState
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
      }) as ActivitiesState
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
      }) as ActivitiesState
    }
    case ActivitiesTypes.USE_MOCK_API: {
      localStorage.setItem(ActivitiesTypes.USE_MOCK_API, JSON.stringify(action.payload.useMockApi))
      return mergeDeepRight(state, {
        useMockApi: action.payload.useMockApi,
      }) as ActivitiesState
    }
    case ActivitiesTypes.UPDATE_ACTIVITIES: {
      const fetchedActivities = transformActivities(action.payload.activities)
      return mergeDeepRight(state, {
        fetchedActivities,
        activitiesList: filterActivities(fetchedActivities, state.filter),
      }) as ActivitiesState
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
      }) as ActivitiesState
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
      }) as ActivitiesState
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
      }) as ActivitiesState
    }
    default:
      return state
  }
}
