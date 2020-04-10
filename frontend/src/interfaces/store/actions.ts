type FunctionType = (...args: any[]) => any
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType }
export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>

export interface Action<T extends string> {
  type: T
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

export enum FilterTypes {}

export enum MapTypes {
  INIT_MAP = 'store.action.map.init',
}

export enum ProfilesTypes {
  ADD_PROFILE = 'store.action.profiles.add',
}

export enum ActivitiesTypes {
  UPDATE_FILTER = 'store.action.activities.update_filter',
  ANIMATE_ACTIVITY = 'store.action.activities.animate',
  UPDATE_ACTIVITIES = 'store.action.activities.update',
  HIGHLIGHT_ACTIVITY = 'store.action.activities.highlight',
  SHOW_ACTIVITY_MARKER = 'store.action.activities.show_marker',
  SHOW_ACTIVITY_DETAILS = 'store.action.activities.show_details',
  USE_MOCK_API = 'store.action.activities.use_mock_api',
  HIGHLIGHT_SIDELIST = 'store.action.activities.highlight_sidelist',
}
