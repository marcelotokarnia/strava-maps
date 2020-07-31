import { assoc, mapObjIndexed } from 'ramda'
import { authAuthorizeMiddleware, authRefreshMiddleware } from './middlewares'
import EncodeJson from 'mappersmith/middlewares/encode-json'
import forge from 'mappersmith'
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

export const authResources = {
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

export default ({ timeout, accessToken }: { accessToken?: string; timeout: number }): any =>
  forge({
    clientId: 'STRAVA',
    host: 'https://www.strava.com/api/v3',
    middlewares: [EncodeJson, TimeoutMiddleware(+timeout)],
    resources: {
      ...(accessToken ? buildResources({ accessToken }) : {}),
      ...authResources,
    },
  })
