import { MapActions } from 'store/actions'
import { MapState } from 'interfaces/store/reducers'
import { MapTypes } from 'interfaces/store/actions'
import { mergeDeepRight } from 'ramda'

const initialState: MapState = {
  defaultCenter: undefined,
  colabs: {},
  savedMap: {
    link: '',
  },
}

export default (state = initialState, action: MapActions): MapState => {
  switch (action.type) {
    case MapTypes.RECORD_COLAB_ROUTE: {
      return mergeDeepRight(state, {
        colabs: { [action.payload.id]: action.payload.colabRoute },
      })
    }
    case MapTypes.INIT_MAP: {
      return mergeDeepRight(state, {
        defaultCenter: action.payload.defaultCenter,
      })
    }
    case MapTypes.SAVED_URL: {
      return mergeDeepRight(state, {
        savedMap: {
          link: `https://strava-maps.herokuapp.com/activities?mapId=${action.payload.mapId}`,
          modalOpen: true,
        },
      })
    }
    default:
      return state
  }
}
