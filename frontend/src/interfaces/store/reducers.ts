import { ActivityDetails, TransformedStravaActivity } from 'interfaces/activities'
import { ParsedStravaProfile } from '@tokks/strava'
import rootReducer from 'store/reducers'

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
  challengeProgress: number
  details: {
    [key: string]: ActivityDetails
  }
  fetchedActivities: Array<ReduxActivity>
  filter: ActivitiesFilter
  tick: number
}

export type RootState = ReturnType<typeof rootReducer>

export interface MapState {
  colabs: {
    [key: string]: Array<{ lat: number; lng: number }>
  }
  defaultCenter?: {
    lat: number
    lng: number
  }
  savedMap: {
    link: string
  }
}
