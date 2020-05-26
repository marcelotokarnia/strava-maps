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
  animationPercentage?: number
  highlightSidelist?: boolean
  isHighlighted?: boolean
  showDetails?: boolean
  showMarker?: boolean
}

export interface ActivitiesState {
  activitiesList: Array<ReduxActivity>
  details: {
    [key: string]: ActivityDetails
  }
  fetchedActivities: Array<ReduxActivity>
  filter: ActivitiesFilter
  useMockApi: boolean
}

export type RootState = ReturnType<typeof rootReducer>

export interface MapState {
  defaultCenter?: {
    lat: number
    lng: number
  }
}
