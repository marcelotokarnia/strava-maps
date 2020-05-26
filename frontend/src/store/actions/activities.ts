import { ActionsUnion, ActivitiesTypes } from '../../interfaces/store/actions'
import { ActivityDetails, ParsedStravaActivity } from '../../interfaces/activities'
import { ActivitiesFilter } from '../../interfaces/store/reducers'
import { createAction } from './'

export const ActivitiesActions = {
  changeActivityAnimation: (p: { animationPercentage: number; id: string }) =>
    createAction(ActivitiesTypes.ANIMATE_ACTIVITY, p),
  changeHighlight: (p: { highlight: boolean; id: string }) =>
    createAction(ActivitiesTypes.HIGHLIGHT_ACTIVITY, p),
  highlightOnSidelist: (p: { highlight: boolean; id: string }) =>
    createAction(ActivitiesTypes.HIGHLIGHT_SIDELIST, p),
  registerDetails: (p: { activityDetails: ActivityDetails }) =>
    createAction(ActivitiesTypes.REGISTER_DETAILS, p),
  showActivityDetails: (p: { id: string; show: boolean }) =>
    createAction(ActivitiesTypes.SHOW_ACTIVITY_DETAILS, p),
  showActivityMarker: (p: { id: string; show: boolean }) =>
    createAction(ActivitiesTypes.SHOW_ACTIVITY_MARKER, p),
  toggleMockApi: (p: { useMockApi: boolean }) => createAction(ActivitiesTypes.USE_MOCK_API, p),
  updateActivities: (p: { activities: Array<ParsedStravaActivity> }) =>
    createAction(ActivitiesTypes.UPDATE_ACTIVITIES, p),
  updateFilter: (p: ActivitiesFilter) => createAction(ActivitiesTypes.UPDATE_FILTER, p),
}

export type ActivitiesActions = ActionsUnion<typeof ActivitiesActions>
