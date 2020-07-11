import { ActionsUnion, ProfilesTypes } from 'interfaces/store/actions'
import { createAction } from './'
import { HYDRATE } from 'next-redux-wrapper'
import { ParsedStravaProfile } from 'interfaces/profile'

export const ProfilesActions = {
  addProfile: (p: { profile: ParsedStravaProfile }) => createAction(ProfilesTypes.ADD_PROFILE, p),
  hydrate: (p: any) => createAction(HYDRATE, p),
}

export type ProfilesActions = ActionsUnion<typeof ProfilesActions>
