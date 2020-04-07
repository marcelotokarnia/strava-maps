import {
  ANIMATE_ACTIVITY,
  HIGHLIGHT_ACTIVITY,
  HIGHLIGHT_SIDELIST,
  SHOW_ACTIVITY_DETAILS,
  SHOW_ACTIVITY_MARKER,
  UPDATE_ACTIVITIES,
  USE_MOCK_API,
} from '../../store/reducers/activities'
import { ParsedStravaActivity, Position } from '../activities'
import { ADD_PROFILE } from '../../store/reducers/profiles'
import { INIT_MAP } from '../../store/reducers/map'
import { ParsedStravaProfile } from '../profile'

export type ActionDispatcher<T extends Action> = (payload: T['payload']) => T

// ---------------------- Map -------------------------------- //

export type Action = {
  type: string
  payload: any
}

export interface InitMapAction {
  type: typeof INIT_MAP
  payload: {
    defaultCenter: Position
  }
}

export type MapActionTypes = InitMapAction

// ---------------------- Profile ---------------------------- //

export interface AddProfile {
  type: typeof ADD_PROFILE
  payload: {
    profile: ParsedStravaProfile
  }
}

export type ProfilesActionTypes = AddProfile

// ---------------------- ACTIVITIES -------------------------- //

export interface UpdateActivitiesAction {
  type: typeof UPDATE_ACTIVITIES
  payload: {
    activities: Array<ParsedStravaActivity>
  }
}

export interface HighligthOnSidelistAction {
  type: typeof HIGHLIGHT_SIDELIST
  payload: {
    id: string
    highlight: boolean
  }
}

export interface HighlightActivity {
  type: typeof HIGHLIGHT_ACTIVITY
  payload: {
    highlight: boolean
    id: string
  }
}

export interface ShowActivityMarker {
  type: typeof SHOW_ACTIVITY_MARKER
  payload: {
    show: boolean
    id: string
  }
}

export interface ShowActivityDetails {
  type: typeof SHOW_ACTIVITY_DETAILS
  payload: {
    show: boolean
    id: string
  }
}

export interface UseMockApi {
  type: typeof USE_MOCK_API
  payload: {
    useMockApi: boolean
  }
}

export interface AnimateActivity {
  type: typeof ANIMATE_ACTIVITY
  payload: {
    animationPercentage: number
    id: string
  }
}

export type ActivitiesActionTypes =
  | UpdateActivitiesAction
  | HighlightActivity
  | ShowActivityDetails
  | ShowActivityMarker
  | UseMockApi
  | AnimateActivity
  | HighligthOnSidelistAction
