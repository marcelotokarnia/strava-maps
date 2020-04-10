import { ActionsUnion, ProfilesTypes } from '../../interfaces/store/actions'
import { createAction } from './'
import { ParsedStravaProfile } from '../../interfaces/profile'

export const ProfilesActions = {
  addProfile: (p: { profile: ParsedStravaProfile }) => createAction(ProfilesTypes.ADD_PROFILE, p),
}

export type ProfilesActions = ActionsUnion<typeof ProfilesActions>
