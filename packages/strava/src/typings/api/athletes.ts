import { Athlete } from '../models/athletes'
import { ClientRequestResponse } from '.'

export interface Athletes {
  Athletes: {
    getLoggedInAthlete: () => Promise<ClientRequestResponse<Athlete>>
  }
}
