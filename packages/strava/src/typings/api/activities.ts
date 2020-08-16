import { ClientRequestResponse, Resource } from '.'
import { Activity } from '../models/activities'

export interface Activities extends Resource {
  Activities: {
    getActivityById: (params: GetActivityByIdParams) => Promise<ClientRequestResponse<Activity>>
    getLoggedInAthleteActivities: () => Promise<ClientRequestResponse<Array<Activity>>>
  }
}

export interface GetActivityByIdParams {
  id: string
}
