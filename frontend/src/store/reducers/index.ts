import activities from './activities'
import { combineReducers } from 'redux'
import map from './map'
import profiles from './profiles'

const rootReducer = combineReducers({
  map,
  activities,
  profiles,
})

export default rootReducer
