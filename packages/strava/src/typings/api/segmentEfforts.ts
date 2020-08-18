import { DetailedSegmentEffort, dtISO } from '..'
import { Method, Resource } from '.'
import { Parameters as MappersmithParameters } from 'mappersmith'

export interface SegmentEfforts extends Resource {
  SegmentEfforts: {
    getEffortsBySegmentId: Method<GetEffortsBySegmentIdParams, Array<DetailedSegmentEffort>>
    getSegmentEffortById: Method<GetSegmentEffortByIdParams, DetailedSegmentEffort>
  }
}

export interface GetEffortsBySegmentIdParams extends MappersmithParameters {
  end_date_local?: dtISO
  per_page?: number
  segment_id: number
  start_date_local?: dtISO
}

export interface GetSegmentEffortByIdParams extends MappersmithParameters {
  id: number
}
