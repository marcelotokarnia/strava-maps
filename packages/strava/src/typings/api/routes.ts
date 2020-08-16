import { ClientRequestResponse, Resource } from '.'
import { Route } from '../models/routes'

export interface Routes extends Resource {
  Routes: {
    getRouteById: (p: GetRouteByIdParams) => Promise<ClientRequestResponse<Route>>
  }
}

export interface GetRouteByIdParams {
  id: string
}
