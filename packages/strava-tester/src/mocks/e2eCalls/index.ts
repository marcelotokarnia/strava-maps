import {
  authorize as authorizeFixture,
  deauthorize as deauthorizeFixture,
  getActivityById as getActivityByIdFixture,
  getLoggedInAthleteActivities as getLoggedInAthleteActivitiesFixture,
  getLoggedInAthlete as getLoggedInAthleteFixture,
  getRouteById as getRouteByIdFixture,
  refresh as refreshFixture,
} from '../../fixtures'
import { authResource, host, resources } from '@tokks/strava/api'
import { m, MockAssert, mockRequest } from 'mappersmith/test'
import { mapObjIndexed, mergeDeepRight } from 'ramda'
import { Resource, SignedResources, UnsignedResources } from '@tokks/strava/typings/api'

type UnpackPromise<T> = T extends Promise<infer U> ? U : T

export type MockType<T extends Resource> = {
  [K1 in keyof T]: {
    [K2 in keyof T[K1]]: (
      input?: Partial<Parameters<T[K1][K2]>[0]>,
      status?: number,
      responseBody?: ReturnType<UnpackPromise<ReturnType<T[K1][K2]>>['data']>
    ) => MockAssert
  }
}

const VARIABLE_GROUP = /{(.*?)}/g

export const mockEndpoint = ({
  host,
  input = {},
  method,
  path,
  responseBody = {},
  status = 200,
}: {
  host: string
  input: any
  method: string
  path: string
  responseBody?: any
  status?: number
}): MockAssert =>
  mockRequest({
    method,
    // ignore host trailing slash, ignore path leading slash and replace mappersmith url params
    url: m.stringContaining(
      `${host.replace(/\/$/, '')}/${path
        .replace(/^\//, '')
        .replace(VARIABLE_GROUP, (_, p1) => encodeURIComponent(input[p1]))}`
    ),
    body: input.body ? JSON.stringify(input.body) : m.anything(),
    response: {
      status,
      body: responseBody,
    },
  })

export type ResponseBodiesMock<T extends Resource> = {
  [K1 in keyof T]: {
    [K2 in keyof T[K1]]: ReturnType<UnpackPromise<ReturnType<T[K1][K2]>>['data']>
  }
}

const defaultResponseBodies: ResponseBodiesMock<SignedResources & UnsignedResources> = {
  Activities: {
    getActivityById: getActivityByIdFixture,
    getLoggedInAthleteActivities: getLoggedInAthleteActivitiesFixture,
  },
  Athletes: {
    getLoggedInAthlete: getLoggedInAthleteFixture,
  },
  Auth: {
    authorize: authorizeFixture,
    deauthorize: deauthorizeFixture,
    refresh: refreshFixture,
  },
  Routes: {
    getRouteById: getRouteByIdFixture,
  },
}

const allResources = mergeDeepRight(resources, authResource)

const mockMethod = (
  resourceName: keyof typeof allResources,
  methodName: keyof typeof allResources[typeof resourceName]
) => (input: any, status = 200, responseBody = defaultResponseBodies[resourceName][methodName]) => {
  const { path, method, host: resourceHost } = allResources[resourceName][methodName]
  return mockEndpoint({ host: resourceHost || host, input, method, path, responseBody, status })
}

const mockResource = (resourceName: keyof typeof allResources) =>
  mapObjIndexed(
    (_methodValue, methodName: keyof typeof allResources[typeof resourceName]) =>
      mockMethod(resourceName, methodName),
    allResources[resourceName]
  )

const e2eCallsMocker = mapObjIndexed(
  (_resourceValue, resourceName) => mockResource(resourceName),
  allResources
) as MockType<SignedResources & UnsignedResources>

export default e2eCallsMocker
