import { ActionsUnion, ActivitiesTypes } from '../../interfaces/store/actions'
import { createAction } from './'
import { ParsedStravaActivity } from '../../interfaces/activities'

export const ActivitiesActions = {
  toggleMockApi: (p: { useMockApi: boolean }) => createAction(ActivitiesTypes.USE_MOCK_API, p),
  updateActivities: (p: { activities: Array<ParsedStravaActivity> }) =>
    createAction(ActivitiesTypes.UPDATE_ACTIVITIES, p),
  changeHighlight: (p: { highlight: boolean; id: string }) =>
    createAction(ActivitiesTypes.HIGHLIGHT_ACTIVITY, p),
  showActivityDetails: (p: { show: boolean; id: string }) =>
    createAction(ActivitiesTypes.SHOW_ACTIVITY_DETAILS, p),
  showActivityMarker: (p: { show: boolean; id: string }) =>
    createAction(ActivitiesTypes.SHOW_ACTIVITY_MARKER, p),
  changeActivityAnimation: (p: { animationPercentage: number; id: string }) =>
    createAction(ActivitiesTypes.ANIMATE_ACTIVITY, p),
  highlightOnSidelist: (p: { id: string; highlight: boolean }) =>
    createAction(ActivitiesTypes.HIGHLIGHT_SIDELIST, p),
}

export type ActivitiesActions = ActionsUnion<typeof ActivitiesActions>
