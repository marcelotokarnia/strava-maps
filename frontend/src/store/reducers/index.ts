import activities, { initialState as activitiesInitialState } from './activities'
import map, { initialState as mapInitialState } from './map'
import profiles, { initialState as profilesInitialState } from './profiles'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  map,
  activities,
  profiles,
})

export const initialState = {
  map: mapInitialState,
  activities: activitiesInitialState,
  profiles: profilesInitialState,
}
export default rootReducer
