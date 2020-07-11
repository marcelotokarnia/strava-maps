import { assoc } from 'ramda'
import { HYDRATE } from 'next-redux-wrapper'
import { ProfilesActions } from 'store/actions'
import { ProfilesState } from 'interfaces/store/reducers'
import { ProfilesTypes } from 'interfaces/store/actions'

export const initialState: ProfilesState = {}

export default (state = initialState, action: ProfilesActions): ProfilesState => {
  switch (action.type) {
    case ProfilesTypes.ADD_PROFILE: {
      return assoc(action.payload.profile.id, action.payload.profile, state)
    }
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    default:
      return state
  }
}
