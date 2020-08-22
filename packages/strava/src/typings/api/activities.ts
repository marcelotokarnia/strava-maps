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
import { dtISO, meters, seconds } from '../'
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

export interface getLoggedInAthleteActivities extends RequestParams {
  // TODO
  //   before
  // Integer, in query	An epoch timestamp to use for filtering activities that have taken place before a certain time.
  // after
  // Integer, in query	An epoch timestamp to use for filtering activities that have taken place after a certain time.
  // page
  // Integer, in query	Page number. Defaults to 1.
  // per_page
  // Integer, in query	Number of items per page. Defaults to 30.
}

export interface UpdateActivityByIdParams extends RequestParams {
  body: UpdatableActivity
  id: number
}

export interface GetZonesByActivityIdParams extends RequestParams {
  id: number
}

export interface GetLapsByActivityIdParams extends RequestParams {
  id: number
}

export interface GetKudoersByActivityIdParams extends RequestParams {
  id: number
  page?: number
  per_page?: number
}

export interface GetCommentsByActivityIdParams extends RequestParams {
  id: number
  page?: number
  per_page?: number
}

export interface GetActivityByIdParams extends RequestParams {
  id: number
}

export interface CreateActivityParams extends RequestParams {
  body: {
    commute?: 1
    description?: string
    distance?: meters
    elapsed_time: seconds
    name: string
    start_date_local: dtISO
    trainer?: 1
    type: ActivityType
  }
}
