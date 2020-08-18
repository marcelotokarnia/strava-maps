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
import { dtISO, epoch, meters, seconds } from '../'
import { Method, Resource } from '.'
import { Parameters as MappersmithParams } from 'mappersmith'

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

export interface getLoggedInAthleteActivities extends MappersmithParams {
  after?: epoch
  before?: epoch
  page?: number
  per_page?: number
}

export interface UpdateActivityByIdParams extends MappersmithParams {
  body: UpdatableActivity
  id: number
}

export interface GetZonesByActivityIdParams extends MappersmithParams {
  id: number
}

export interface GetLapsByActivityIdParams extends MappersmithParams {
  id: number
}

export interface GetKudoersByActivityIdParams extends MappersmithParams {
  id: number
  page?: number
  per_page?: number
}

export interface GetCommentsByActivityIdParams extends MappersmithParams {
  id: number
  page?: number
  per_page?: number
}

export interface GetActivityByIdParams extends MappersmithParams {
  id: number
}

export interface CreateActivityParams extends MappersmithParams {
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
