import { ActivityType, DetailedActivity, SummaryActivity } from '../models/activities'
import { dtISO, seconds } from '../'
import { Method, Resource } from '.'
import { RequestParams } from 'mappersmith'

export interface Activities extends Resource {
  Activities: {
    createActivity: Method<CreateActivityParams, DetailedActivity>
    getActivityById: Method<GetActivityByIdParams, DetailedActivity>
    getCommentsByActivityId: Method<any, any>
    getKudoersByActivityId: Method<any, any>
    getLapsByActivityId: Method<any, any>
    getLoggedInAthleteActivities: Method<void, Array<SummaryActivity>>
    getZonesByActivityId: Method<any, any>
    updateActivityById: Method<any, any>
  }
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
