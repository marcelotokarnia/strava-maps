import { ClientRequestResponse, Resource } from '.'
import { Athlete } from '../models/athletes'

export interface Athletes extends Resource {
  Athletes: {
    getLoggedInAthlete: () => Promise<ClientRequestResponse<Athlete>>
  }
}
