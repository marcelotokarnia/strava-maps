import { Map } from 'interfaces/map'

export type API = {
  graphql: {
    getData: (p: {
      body: {
        query: string
        variables: { id?: string; mapId?: string }
      }
    }) => Promise<MappersmithResponse<{ data: any }>>
  }
  map: {
    getColabRoute: (p: { id: string }) => Promise<MappersmithResponse<string>>
    save: (p: { body: Map }) => Promise<MappersmithResponse<{ mapId: string }>>
  }
  meta: {
    tags: (p: { body: { url: string } }) => Promise<MappersmithResponse<Metatags>>
  }
  strava: {
    auth: (p: { body: { code: string } }) => Promise<MappersmithResponse<void>>
  }
}

export type Metatags = {
  description: string
  image: string
  title: string
}

export type MappersmithResponse<T = any> = {
  data: () => T
  status: () => number
}
