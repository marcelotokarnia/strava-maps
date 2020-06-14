import { MapActions } from '../actions'
import { MapState } from '../../interfaces/store/reducers'
import { MapTypes } from '../../interfaces/store/actions'
import { mergeDeepRight } from 'ramda'

const initialState: MapState = {
  defaultCenter: undefined,
  savedMap: {
    link: '',
  },
}

export default (state = initialState, action: MapActions): MapState => {
  switch (action.type) {
    case MapTypes.INIT_MAP: {
      return mergeDeepRight(state, {
        defaultCenter: action.payload.defaultCenter,
      })
    }
    case MapTypes.SAVED_URL: {
      return mergeDeepRight(state, {
        savedMap: {
          link: `https://strava-maps.herokuapp.com/activities?${action.payload.mapId}`,
          modalOpen: true,
        },
      })
    }
    default:
      return state
  }
}
