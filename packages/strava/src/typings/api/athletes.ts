import { ActivityStats, DetailedAthlete, kg, Zones } from '..'
import { Method, Resource } from '.'
import { Parameters as MappersmithParameters } from 'mappersmith'

export interface Athletes extends Resource {
  Athletes: {
    getLoggedInAthlete: Method<void, DetailedAthlete>
    getLoggedInAthleteZones: Method<void, Zones>
    getStats: Method<getStatsParams, ActivityStats>
    updateLoggedInAthlete: Method<updateLoggedInAthleteParams, DetailedAthlete>
  }
}

export interface updateLoggedInAthleteParams extends MappersmithParameters {
  weigth: kg
}

export interface getStatsParams extends MappersmithParameters {
  id: number
}
