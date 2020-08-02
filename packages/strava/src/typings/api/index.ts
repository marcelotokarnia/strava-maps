import { Activities } from './activities'
import { Athletes } from './athletes'
import { Auth } from './auth'
import { Routes } from './routes'

export interface SignedResources extends Activities, Athletes, Routes {}
export interface UnsignedResources extends Auth {}

export interface ClientRequestResponse<T = any> {
  data: () => T
  status: () => number
}
