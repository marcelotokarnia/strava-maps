import { DetailedSegment, ExplorerResponse, SummarySegment } from '..'
import { Method, Resource } from '.'
import { Parameters as MappersmithParams } from 'mappersmith'

export interface Segments extends Resource {
  Segments: {
    exploreSegments: Method<ExploreSegmentsParams, ExplorerResponse>
    getLoggedInAthleteStarredSegments: Method<
      GetLoggedInAthleteStarredSegmentsParams,
      Array<SummarySegment>
    >
    getSegmentById: Method<GetSegmentByIdParams, DetailedSegment>
    starSegment: Method<StarSegmentParams, DetailedSegment>
  }
}

export interface StarSegmentParams extends MappersmithParams {
  id: number
  starred: boolean
}

export interface GetSegmentByIdParams extends MappersmithParams {
  id: number
}

export interface GetLoggedInAthleteStarredSegmentsParams extends MappersmithParams {
  page?: number
  per_page?: number
}

export interface ExploreSegmentsParams extends MappersmithParams {
  activity_type: 'running' | 'riding'
  bounds: [number, number, number, number]
  max_cat: number
  min_cat: number
}
