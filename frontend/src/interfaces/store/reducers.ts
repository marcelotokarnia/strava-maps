import { ActivityDetails, TransformedStravaActivity } from '../activities'
import { ParsedStravaProfile } from '../profile'
import rootReducer from '../../store/reducers'

export interface ProfilesState {
  [key: string]: ParsedStravaProfile
}

export interface ActivitiesFilter {
  type: {
    bike: boolean
    run: boolean
    workout: boolean
  }
}

export type ReduxActivity = TransformedStravaActivity & {
  isHighlighted?: boolean
  showMarker?: boolean
  showDetails?: boolean
  animationPercentage?: number
  highlightSidelist?: boolean
}

export interface ActivitiesState {
  fetchedActivities: Array<ReduxActivity>
  activitiesList: Array<ReduxActivity>
  details: {
    [key: string]: ActivityDetails
  }
  useMockApi: boolean
  filter: ActivitiesFilter
}

export type RootState = ReturnType<typeof rootReducer>

export interface MapState {
  defaultCenter?: {
    lat: number
    lng: number
  }
}
