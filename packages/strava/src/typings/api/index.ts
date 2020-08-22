import { Parameters as MappersmithParams, Response } from 'mappersmith'
import { Activities } from './activities'
import { Athletes } from './athletes'
import { Auth } from './auth'
import { Clubs } from './clubs'
import { Gears } from './gears'
import { Routes } from './routes'
import { RunningRaces } from './runningRaces'
import { SegmentEfforts } from './segmentEfforts'
import { Segments } from './segments'
import { Streams } from './streams'
import { Uploads } from './uploads'

export type MethodResponse<R> = Promise<ClientRequestResponse<R>>

export type Method<P extends MappersmithParams | void = MappersmithParams, R = any> = P extends void
  ? () => MethodResponse<R>
  : (p: P) => MethodResponse<R>

export interface Resource {
  [key: string]: {
    [key: string]: (params?: any) => Promise<ClientRequestResponse<any>>
  }
}

export interface SignedResources
  extends Activities,
    Athletes,
    Clubs,
    Gears,
    Routes,
    RunningRaces,
    SegmentEfforts,
    Segments,
    Streams,
    Uploads {}
export interface UnsignedResources extends Auth {}

export interface ClientRequestResponse<T = any> extends Response {
  data: <P = T>() => P
}
