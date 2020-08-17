import {
  ActivityType,
  ActivityZone,
  Comment,
  DetailedActivity,
  Lap,
  SummaryActivity,
  SummaryAthlete,
  UpdatableActivity,
} from '../models'
import { dtISO, seconds } from '../'
import { Method, Resource } from '.'
import { RequestParams } from 'mappersmith'

export interface Activities extends Resource {
  Activities: {
    createActivity: Method<CreateActivityParams, DetailedActivity>
    getActivityById: Method<GetActivityByIdParams, DetailedActivity>
    getCommentsByActivityId: Method<GetCommentsByActivityIdParams, Array<Comment>>
    getKudoersByActivityId: Method<GetKudoersByActivityIdParams, Array<SummaryAthlete>>
    getLapsByActivityId: Method<GetLapsByActivityIdParams, Array<Lap>>
    getLoggedInAthleteActivities: Method<void, Array<SummaryActivity>>
    getZonesByActivityId: Method<GetZonesByActivityIdParams, Array<ActivityZone>>
    updateActivityById: Method<UpdateActivityByIdParams, DetailedActivity>
  }
}

export interface UpdateActivityByIdParams extends RequestParams {
  body: UpdatableActivity
  id: string
}

export interface GetZonesByActivityIdParams extends RequestParams {
  id: string
}

export interface GetLapsByActivityIdParams extends RequestParams {
  id: string
}

export interface GetKudoersByActivityIdParams extends RequestParams {
  id: string
  page?: number
  per_page?: number
}

export interface GetCommentsByActivityIdParams extends RequestParams {
  id: string
  page?: number
  per_page?: number
}

export interface GetActivityByIdParams extends RequestParams {
  id: string
}

export interface CreateActivityParams extends RequestParams {
  body: {
    elapsed_time: seconds
    name: string
    start_date_local: dtISO
    type: ActivityType
  }
}
