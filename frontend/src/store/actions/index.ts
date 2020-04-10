import { Action, ActionWithPayload } from '../../interfaces/store/actions'

export function createAction<T extends string>(type: T): Action<T>
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload ? { type, payload } : { type }
}

export { ActivitiesActions } from './activities'
export { MapActions } from './map'
export { ProfilesActions } from './profile'
