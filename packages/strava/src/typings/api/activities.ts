import { Method, Resource } from '.'
import { Activity } from '../models/activities'
import { RequestParams } from 'mappersmith'

export interface Activities extends Resource {
  Activities: {
    getActivityById: Method<GetActivityByIdParams, Activity>
    getLoggedInAthleteActivities: Method<void, Array<Activity>>
  }
}

export interface GetActivityByIdParams extends RequestParams {
  id: string
}
