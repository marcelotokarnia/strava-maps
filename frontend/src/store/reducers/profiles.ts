import { AddProfile, ProfilesActionTypes } from '../../interfaces/store/actions'
import { assoc } from 'ramda'
import { ProfilesState } from '../../interfaces/store/reducers'

export const ADD_PROFILE = 'store.action.profiles.add'

const initialState: ProfilesState = {}

export default (state = initialState, { type, payload }: ProfilesActionTypes): ProfilesState => {
  switch (type) {
    case ADD_PROFILE: {
      return assoc(
        (payload as AddProfile['payload']).profile.id,
        (payload as AddProfile['payload']).profile,
        state
      )
    }

    default:
      return state
  }
}
