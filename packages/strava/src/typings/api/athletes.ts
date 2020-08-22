import { ActivityStats, DetailedAthlete, kg, Zones } from '..'
import { Method, Resource } from '.'
import { RequestParams } from 'mappersmith'

export interface Athletes extends Resource {
  Athletes: {
    getLoggedInAthlete: Method<void, DetailedAthlete>
    getLoggedInAthleteZones: Method<void, Zones>
    getStats: Method<getStatsParams, ActivityStats>
    updateLoggedInAthlete: Method<updateLoggedInAthleteParams, DetailedAthlete>
  }
}

export interface updateLoggedInAthleteParams extends RequestParams {
  weigth: kg
}

export interface getStatsParams extends RequestParams {
  id: number
}
