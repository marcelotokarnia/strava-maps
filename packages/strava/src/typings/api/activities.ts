import { Activity } from '../models/activities'
import { ClientRequestResponse } from '.'

export interface Activities {
  Activities: {
    getActivityById: (params: GetActivityByIdParams) => Promise<ClientRequestResponse<Activity>>
    getLoggedInAthleteActivities: () => Promise<ClientRequestResponse<Array<Activity>>>
  }
}

export interface GetActivityByIdParams {
  id: string
}
