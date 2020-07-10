import { assoc } from 'ramda'
import { ProfilesActions } from 'store/actions'
import { ProfilesState } from 'interfaces/store/reducers'
import { ProfilesTypes } from 'interfaces/store/actions'

const initialState: ProfilesState = {}

export default (state = initialState, action: ProfilesActions): ProfilesState => {
  switch (action.type) {
    case ProfilesTypes.ADD_PROFILE: {
      return assoc(action.payload.profile.id, action.payload.profile, state)
    }

    default:
      return state
  }
}
