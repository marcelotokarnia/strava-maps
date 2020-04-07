import { MapActionTypes } from '../../interfaces/store/actions'
import { MapState } from '../../interfaces/store/reducers'
import { mergeDeepRight } from 'ramda'

export const INIT_MAP = 'store.action.map.init'

const initialState: MapState = {
  defaultCenter: undefined,
}

export default (state = initialState, { type, payload }: MapActionTypes): MapState => {
  switch (type) {
    case INIT_MAP: {
      return mergeDeepRight(state, {
        defaultCenter: payload.defaultCenter,
      })
    }
    default:
      return state
  }
}
