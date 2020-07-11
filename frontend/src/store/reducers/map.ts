import { HYDRATE } from 'next-redux-wrapper'
import { MapActions } from 'store/actions'
import { MapState } from 'interfaces/store/reducers'
import { MapTypes } from 'interfaces/store/actions'
import { mergeDeepRight } from 'ramda'

export const initialState: MapState = {
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
      }) as MapState
    }
    case MapTypes.INIT_MAP: {
      return mergeDeepRight(state, {
        defaultCenter: action.payload.defaultCenter,
      }) as MapState
    }
    case MapTypes.SAVED_URL: {
      return mergeDeepRight(state, {
        savedMap: {
          link: `https://strava-maps.herokuapp.com/activities?mapId=${action.payload.mapId}`,
          modalOpen: true,
        },
      }) as MapState
    }
    case HYDRATE: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}
