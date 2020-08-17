import { Method, Resource } from '.'
import { Athlete } from '../models/athletes'

export interface Athletes extends Resource {
  Athletes: {
    getLoggedInAthlete: Method<void, Athlete>
  }
}
