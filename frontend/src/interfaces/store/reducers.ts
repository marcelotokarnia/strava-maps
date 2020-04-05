import {
  ANIMATE_ACTIVITY,
  HIGHLIGHT_ACTIVITY,
  HIGHLIGHT_SIDELIST,
  SHOW_ACTIVITY_DETAILS,
  SHOW_ACTIVITY_MARKER,
  UPDATE_ACTIVITIES,
  USE_MOCK_API,
} from '../../store/reducers/activities'
import { ParsedStravaActivity, TransformedStravaActivity } from '../activities'
import { ADD_PROFILE } from '../../store/reducers/profiles'
import { INIT_MAP } from '../../store/reducers/map'
import { ParsedStravaProfile } from '../profile'
import rootReducer from '../../store/reducers'

export interface ProfilesState {
  [key: string]: ParsedStravaProfile
}

export interface AddProfile {
  type: typeof ADD_PROFILE
  payload: {
    profile: ParsedStravaProfile
  }
}

export type ProfilesActionTypes = AddProfile

export type ReduxActivity = TransformedStravaActivity & {
  isHighlighted?: boolean
  showMarker?: boolean
  showDetails?: boolean
  animationPercentage?: number
}

export interface ActivitiesState {
  activitiesList: Array<ReduxActivity>
  useMockApi: boolean
}

export interface UpdateActivitiesAction {
  type: typeof UPDATE_ACTIVITIES
  payload: {
    activities: Array<ParsedStravaActivity>
  }
}

export interface HighlithOnSidelistAction {
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
  | HighlithOnSidelistAction

export type RootState = ReturnType<typeof rootReducer>

export interface MapState {
  defaultCenter?: {
    lat: number
    lng: number
  }
}

export interface InitMapAction {
  type: typeof INIT_MAP
  payload: {
    defaultCenter: MapState['defaultCenter']
  }
}

export type MapActionTypes = InitMapAction
