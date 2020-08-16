import {
  authorize as authorizeFixture,
  deauthorize as deauthorizeFixture,
  getActivityById as getActivityByIdFixture,
  getLoggedInAthlete as getLoggedInAthleteFixture,
  getRouteById as getRouteByIdFixture,
  refresh as refreshFixture,
} from '../../fixtures'
import { host, resources } from '../../api'
import { m, MockAssert, mockRequest } from 'mappersmith/test'
import { Resource, SignedResources, UnsignedResources } from '../../typings/api'
import { mapObjIndexed } from 'ramda'

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never

type UnpackPromise<T> = T extends Promise<infer U> ? U : T

type ObjectFunctions = { [key: string]: Function }

export type MockTypeFlat<T extends ObjectFunctions> = {
  [K1 in keyof T]: (input?: any, status?: number, responseBody?: any) => MockAssert
}

export type MockType<T extends Resource> = {
  [K1 in keyof T]: {
    [K2 in keyof T[K1]]: (
      input?: Partial<ArgumentTypes<T[K1][K2]>[0]>,
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
}) =>
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
    getLoggedInAthleteActivities: [getActivityByIdFixture],
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

const mockMethod = (
  resourceName: keyof typeof resources,
  methodName: keyof typeof resources[typeof resourceName]
) => (input: any, status = 200, responseBody = defaultResponseBodies[resourceName][methodName]) => {
  const { path, method, host: resourceHost } = resources[resourceName][methodName]
  return mockEndpoint({ host: resourceHost || host, input, method, path, responseBody, status })
}

const mockResource = (resourceName: keyof typeof resources) =>
  mapObjIndexed(
    (_methodValue, methodName: keyof typeof resources[typeof resourceName]) =>
      mockMethod(resourceName, methodName),
    resources[resourceName]
  )

const e2eCallsMocker = mapObjIndexed(
  (_resourceValue, resourceName) => mockResource(resourceName),
  resources
) as MockType<SignedResources & UnsignedResources>

export default e2eCallsMocker
