import { Activities } from './activities'
import { Athletes } from './athletes'
import { Auth } from './auth'
import { RequestParams } from 'mappersmith'
import { Routes } from './routes'

export type MethodResponse<R> = Promise<ClientRequestResponse<R>>

export type Method<P extends RequestParams | void = RequestParams, R = any> = P extends void
  ? () => MethodResponse<R>
  : (p: P) => MethodResponse<R>

export interface Resource {
  [key: string]: {
    [key: string]: (params?: any) => Promise<ClientRequestResponse<any>>
  }
}

export interface SignedResources extends Activities, Athletes, Routes {}
export interface UnsignedResources extends Auth {}

export interface ClientRequestResponse<T = any> {
  data: () => T
  status: () => number
}
