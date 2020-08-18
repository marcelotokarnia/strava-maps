import { assoc, mapObjIndexed } from 'ramda'
import { authAuthorizeMiddleware, authRefreshMiddleware } from './middlewares'
import forge, { Middleware } from 'mappersmith'
import { SignedResources, UnsignedResources } from '../typings/api'
import EncodeJson from 'mappersmith/middlewares/encode-json'
import TimeoutMiddleware from 'mappersmith/middlewares/timeout'

export const resources = {
  Activities: {
    getLoggedInAthleteActivities: { method: 'get', path: '/athlete/activities' },
    getActivityById: { method: 'get', path: '/activities/{id}' },
  },
  Athletes: {
    getLoggedInAthlete: { method: 'get', path: '/athlete' },
  },
  //   Clubs: {},
  //   Gears: {},
  Routes: {
    getRouteById: { method: 'get', path: '/routes/{id}' },
  },
  //   RunningRaces: {},
  //   SegmentEfforts: {},
  //   Segments: {},
  //   Streams: {},
  //   Uploads: {},
}

export const authResource = {
  Auth: {
    authorize: {
      host: 'https://www.strava.com',
      method: 'post',
      path: '/oauth/token',
      middlewares: [authAuthorizeMiddleware],
    },
    refresh: {
      host: 'https://www.strava.com',
      method: 'post',
      path: '/oauth/token',
      middlewares: [authRefreshMiddleware],
    },
    deauthorize: {
      host: 'https://www.strava.com',
      method: 'post',
      path: '/oauth/deauthorize',
    },
  },
}

const buildResources = ({ accessToken }: { accessToken: string }) =>
  mapObjIndexed(
    mapObjIndexed(
      assoc('headers', {
        Authorization: `Bearer ${accessToken}`,
      })
    ),
    resources
  )

const hasAccessToken = (accessToken?: string | null): accessToken is string => Boolean(accessToken)

export interface Api {
  (params: { accessToken: string; timeout: number }): SignedResources
  (params: { timeout: number }): UnsignedResources
}

export const host = 'https://www.strava.com/api/v3'

const api: Api = (p: { accessToken?: string; middlewares?: Middleware[]; timeout?: number }) => {
  const { accessToken, timeout = 2000, middlewares = [] } = p
  return forge({
    clientId: 'STRAVA',
    host,
    middlewares: [EncodeJson, TimeoutMiddleware(+timeout), ...middlewares],
    resources: {
      ...(hasAccessToken(accessToken) ? buildResources({ accessToken: accessToken }) : {}),
      ...authResource,
    },
  }) as any
}

export default api
