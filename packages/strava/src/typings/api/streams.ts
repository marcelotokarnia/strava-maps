import { Method, MethodResponse, Resource } from '.'
import { StreamKeys, StreamSetArr, StreamSetObj } from '..'
import { Parameters as MappersmithParameters } from 'mappersmith'

interface ConvertableParams {
  id: number
  key_by_type?: boolean
  keys?: Array<StreamKeys>
}

type ConvertableMethod<P extends ConvertableParams> = {
  (p: Omit<P, 'key_by_type'> & { key_by_type: true }): MethodResponse<StreamSetObj>
  (p: P): MethodResponse<StreamSetArr>
}

export interface Streams extends Resource {
  Streams: {
    getActivityStreams: ConvertableMethod<GetActivityStreamsParams>
    getRouteStreams: Method<GetRouteStreamsParams, StreamSetArr>
    getSegmentEffortStreams: ConvertableMethod<GetSegmentEffortStreamsParams>
    getSegmentStreams: ConvertableMethod<GetSegmentStreamsParams>
  }
}

export interface GetActivityStreamsParams extends MappersmithParameters, ConvertableParams {}

export interface GetRouteStreamsParams extends MappersmithParameters {
  id: number
}
export interface GetSegmentEffortStreamsParams extends MappersmithParameters, ConvertableParams {}
export interface GetSegmentStreamsParams extends MappersmithParameters, ConvertableParams {}
