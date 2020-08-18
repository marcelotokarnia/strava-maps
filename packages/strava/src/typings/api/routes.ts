import { Method, Resource } from '.'
import { Parameters as MappersmithParams } from 'mappersmith'
import { Route } from '../models/routes'

export interface Routes extends Resource {
  Routes: {
    getRouteAsGPX: Method<GetRouteAsGPXParams>
    getRouteAsTCX: Method<GetRouteAsTCXParams>
    getRouteById: Method<GetRouteByIdParams, Route>
    getRoutesByAthleteId: Method<GetRouteByAthleteId, Array<Route>>
  }
}

export interface GetRouteByIdParams extends MappersmithParams {
  id: number
}

export interface GetRouteByAthleteId extends MappersmithParams {
  id: number
  page?: number
  per_page?: number
}

export interface GetRouteAsTCXParams extends MappersmithParams {
  id: number
}

export interface GetRouteAsGPXParams extends MappersmithParams {
  id: number
}
