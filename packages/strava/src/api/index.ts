import { assoc, mapObjIndexed } from 'ramda'
import { authAuthorizeMiddleware, authRefreshMiddleware } from './middlewares'
import forge, { Middleware } from 'mappersmith'
import { Resource, SignedResources, UnsignedResources } from '../typings/api'
import EncodeJson from 'mappersmith/middlewares/encode-json'
import TimeoutMiddleware from 'mappersmith/middlewares/timeout'

enum RequestMethod {
  CONNECT = 'connect',
  DELETE = 'delete',
  GET = 'get',
  HEAD = 'head',
  OPTIONS = 'options',
  PATCH = 'patch',
  POST = 'post',
  PUT = 'put',
  TRACE = 'trace',
}

type ResourceKeys<T extends Resource> = {
  [K1 in keyof T]: {
    [K2 in keyof T[K1]]: {
      [key: string]: any
      auth?: { password: string; username: string }
      authAttr?: string
      binary?: boolean
      bodyAttr?: string
      headers?: Record<string, string>
      headersAttr?: string
      host?: string
      hostAttr?: string
      method: RequestMethod
      middleware?: Array<Middleware>
      middlewares?: Array<Middleware>
      params?: Record<string, string>
      path: string
      queryParamAlias?: Record<string, string>
      timeoutAttr?: string
    }
  }
}

export const resources: ResourceKeys<SignedResources> = {
  Activities: {
    createActivity: { method: RequestMethod.POST, path: '/activities' },
    getActivityById: { method: RequestMethod.GET, path: '/activities/{id}' },
    getCommentsByActivityId: {
      method: RequestMethod.GET,
      path: '/activities/{id}/comments?page={page}&per_page={per_page}',
    },
    getKudoersByActivityId: {
      method: RequestMethod.GET,
      path: '/activities/{id}/kudos?page={page}&per_page={per_page}',
    },
    getLapsByActivityId: { method: RequestMethod.GET, path: '/activities/{id}/laps' },
    getLoggedInAthleteActivities: {
      method: RequestMethod.GET,
      path: '/athlete/activities?before={before}&after={after}&page={page}&per_page={per_page}',
    },
    getZonesByActivityId: { method: RequestMethod.GET, path: '/activities/{id}/zones' },
    updateActivityById: { method: RequestMethod.PUT, path: '/activities/{id}' },
  },
  Athletes: {
    getLoggedInAthleteZones: { method: RequestMethod.GET, path: '/athlete/zones' },
    getStats: { method: RequestMethod.GET, path: '/athletes/{id}/stats' },
    getLoggedInAthlete: { method: RequestMethod.GET, path: '/athlete' },
    updateLoggedInAthlete: { method: RequestMethod.PUT, path: '/athlete' },
  },
  Clubs: {
    getClubActivitiesById: {
      method: RequestMethod.GET,
      path: '/clubs/{id}/activities?page={page}&per_page={per_page}',
    },
    getClubAdminsById: {
      method: RequestMethod.GET,
      path: '/clubs/{id}/admins?page={page}&per_page={per_page}',
    },
    getClubById: { method: RequestMethod.GET, path: '/clubs/{id}' },
    getClubMembersById: {
      method: RequestMethod.GET,
      path: '/clubs/{id}/members?page={page}&per_page={per_page}',
    },
    getLoggedInAthleteClubs: {
      method: RequestMethod.GET,
      path: '/athlete/clubs?page={page}&per_page={per_page}',
    },
  },
  Gears: {
    getGearById: { method: RequestMethod.GET, path: '/gear/{id}' },
  },
  Routes: {
    getRouteAsGPX: { method: RequestMethod.GET, path: '/routes/{id}/export_gpx' },
    getRouteAsTCX: { method: RequestMethod.GET, path: '/routes/{id}/export_tcx' },
    getRoutesByAthleteId: {
      method: RequestMethod.GET,
      path: '/athletes/{id}/routes?page={page}&per_page={per_page}',
    },
    getRouteById: { method: RequestMethod.GET, path: '/routes/{id}' },
  },
  RunningRaces: {
    getRunningRaceById: { method: RequestMethod.GET, path: '/running_races/{id}' },
    getRunningRaces: { method: RequestMethod.GET, path: '/running_races?year={year}' },
  },
  SegmentEfforts: {
    getEffortsBySegmentId: {
      method: RequestMethod.GET,
      path:
        '/segment_efforts?segment_id={segment_id}&start_date_local={start_date_local}&end_date_local={end_date_local}&per_page={per_page}',
    },
    getSegmentEffortById: { method: RequestMethod.GET, path: '/segment_efforts/{id}' },
  },
  Segments: {},
  //   Streams: {},
  //   Uploads: {},
}

export const authResource: ResourceKeys<UnsignedResources> = {
  Auth: {
    authorize: {
      host: 'https://www.strava.com',
      method: RequestMethod.POST,
      path: '/oauth/token',
      middlewares: [authAuthorizeMiddleware],
    },
    refresh: {
      host: 'https://www.strava.com',
      method: RequestMethod.POST,
      path: '/oauth/token',
      middlewares: [authRefreshMiddleware],
    },
    deauthorize: {
      host: 'https://www.strava.com',
      method: RequestMethod.POST,
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
  (params: { accessToken: string; middlewares?: Middleware[]; timeout?: number }): SignedResources
  (params?: { middlewares?: Middleware[]; timeout?: number }): UnsignedResources
}

export const host = 'https://www.strava.com/api/v3'

const api: Api = (
  p: { accessToken?: string; middlewares?: Middleware[]; timeout?: number } | undefined = {}
) => {
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
