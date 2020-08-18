import { Method, Resource } from '.'
import { DetailedGear } from '..'
import { Parameters as MappersmithParameters } from 'mappersmith'

export interface Gears extends Resource {
  Gears: {
    getGearById: Method<GetGearByIdParams, DetailedGear>
  }
}

export interface GetGearByIdParams extends MappersmithParameters {
  id: number
  page?: number
  per_page?: number
}
