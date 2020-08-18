import {
  dtISO,
  LatLng,
  meters,
  polyline,
  PolylineMap,
  SummaryPRSegmentEffort,
  SummarySegmentEffort,
} from '..'

export interface ExplorerSegment {
  avg_grade: number
  climb_category: 0 | 1 | 2 | 3 | 4 | 5
  climb_category_desc: 'NC' | '4' | '3' | '2' | '1' | 'HC'
  distance: meters
  elev_difference: meters
  end_latlng: LatLng
  id: number
  name: string
  points: polyline
  start_latlng: LatLng
}

export interface ExplorerResponse {
  segments: Array<ExplorerSegment>
}

export interface Segment {
  activity_type: 'Ride' | 'Run'
  athlete_pr_effort: SummarySegmentEffort
  athlete_segment_stats: SummaryPRSegmentEffort
  average_grade: number
  city: string
  climb_category: 0 | 1 | 2 | 3 | 4 | 5
  country: string
  distance: meters
  elevation_high: meters
  elevation_low: meters
  end_latlng: LatLng
  id: number
  maximum_grade: number
  name: string
  private: boolean
  start_latlng: LatLng
  state: string
}

export interface SummarySegment extends Segment {}

export interface DetailedSegment extends Segment {
  athlete_count: number
  created_at: dtISO
  effort_count: number
  hazardous: boolean
  map: PolylineMap
  star_count: number
  total_elevation_gain: meters
  updated_at: dtISO
}
