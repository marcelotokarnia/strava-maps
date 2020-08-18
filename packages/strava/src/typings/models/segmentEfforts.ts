import { dtISO, MetaActivity, MetaAthlete, meters, seconds, SummarySegment } from '../'

export type SummaryPRSegmentEffort = {
  effort_count: number
  pr_activity_id: number
  pr_date: dtISO
  pr_elapsed_time: seconds
}

interface SegmentEffort {
  activity_id: number
  distance: meters
  elapsed_time: seconds
  id: number
  is_kom: boolean
  start_date: dtISO
  start_date_local: dtISO
}

export interface SummarySegmentEffort extends SegmentEffort {}

export interface DetailedSegmentEffort extends SegmentEffort {
  activity: MetaActivity
  athlete: MetaAthlete
  average_cadence: number
  average_heartrate: number
  average_watts: number
  device_watts: number
  end_index: number
  hidden: boolean
  kom_rank: number
  max_heartrate: number
  moving_time: seconds
  name: string
  pr_rank: number
  segment: SummarySegment
  start_index: number
}
