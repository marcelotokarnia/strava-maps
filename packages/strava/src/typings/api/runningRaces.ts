import { Method, Resource } from '.'
import { Parameters as MappersmithParameters } from 'mappersmith'
import { RunningRace } from '..'

export interface RunningRaces extends Resource {
  RunningRaces: {
    getRunningRaceById: Method<GetRunningRaceByIdParams, RunningRace>
    getRunningRaces: Method<GetRunningRacesParams, Array<RunningRace>>
  }
}

export interface GetRunningRaceByIdParams extends MappersmithParameters {
  id: number
}

export interface GetRunningRacesParams extends MappersmithParameters {
  year: number
}
