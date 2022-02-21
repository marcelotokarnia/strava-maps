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
  RECORD_COLAB_ROUTE = 'store.action.map.colab_route',
  SAVED_URL = 'store.action.map.save',
}

export enum ProfilesTypes {
  ADD_PROFILE = 'store.action.profiles.add',
}

export enum ActivitiesTypes {
  ANIMATE_ACTIVITY = 'store.action.activities.animate',
  CHALLENGE_PROGRESS = 'store.action.activities.challenge_progress',
  HIGHLIGHT_ACTIVITY = 'store.action.activities.highlight',
  HIGHLIGHT_SIDELIST = 'store.action.activities.highlight_sidelist',
  REGISTER_DETAILS = 'store.action.activities.register_details',
  SHOW_ACTIVITY_DETAILS = 'store.action.activities.show_details',
  SHOW_ACTIVITY_MARKER = 'store.action.activities.show_marker',
  UPDATE_ACTIVITIES = 'store.action.activities.update',
  UPDATE_FILTER = 'store.action.activities.update_filter',
  USE_MOCK_API = 'store.action.activities.use_mock_api',
}
