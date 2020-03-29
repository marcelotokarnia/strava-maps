import activities from './activities'
import { combineReducers } from 'redux'
import map from './map'

const rootReducer = combineReducers({
  map,
  activities,
})

export default rootReducer
