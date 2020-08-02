import { ClientRequestResponse } from '.'
import { Route } from '../models/routes'

export interface Routes {
  Routes: {
    getRouteById: (p: GetRouteByIdParams) => Promise<ClientRequestResponse<Route>>
  }
}

export interface GetRouteByIdParams {
  id: string
}
