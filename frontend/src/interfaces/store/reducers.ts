import {
  HIGHLIGHT_ACTIVITY,
  SHOW_ACTIVITY_DETAILS,
  SHOW_ACTIVITY_MARKER,
  UPDATE_ACTIVITIES,
} from '../../store/reducers/activities'
import { INIT_MAP } from '../../store/reducers/map'
import { ParsedStravaActivity } from '../activities'
import rootReducer from '../../store/reducers'

export type ReduxActivity = ParsedStravaActivity & {
  isHighlighted?: boolean
  showMarker?: boolean
  showDetails?: boolean
}

export interface ActivitiesState {
  activitiesList: Array<ReduxActivity>
}

export interface UpdateActivitiesAction {
  type: typeof UPDATE_ACTIVITIES
  payload: {
    activities: Array<ReduxActivity>
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

export type ActivitiesActionTypes =
  | UpdateActivitiesAction
  | HighlightActivity
  | ShowActivityDetails
  | ShowActivityMarker

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
