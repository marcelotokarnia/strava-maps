import { ParsedStravaProfile } from '../profile'
import rootReducer from '../../store/reducers'
import { TransformedStravaActivity } from '../activities'

export interface ProfilesState {
  [key: string]: ParsedStravaProfile
}

export type ReduxActivity = TransformedStravaActivity & {
  isHighlighted?: boolean
  showMarker?: boolean
  showDetails?: boolean
  animationPercentage?: number
  highlightSidelist?: boolean
}

export interface ActivitiesState {
  activitiesList: Array<ReduxActivity>
  useMockApi: boolean
}

export type RootState = ReturnType<typeof rootReducer>

export interface MapState {
  defaultCenter?: {
    lat: number
    lng: number
  }
}
