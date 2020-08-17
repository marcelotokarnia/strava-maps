import { Method, Resource } from '.'
import { RequestParams } from 'mappersmith'
import { Route } from '../models/routes'

export interface Routes extends Resource {
  Routes: {
    getRouteById: Method<GetRouteByIdParams, Route>
  }
}

export interface GetRouteByIdParams extends RequestParams {
  id: string
}
