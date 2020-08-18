import { Method, Resource } from '.'
import { Parameters as MappersmithParams } from 'mappersmith'
import { SummaryAthlete } from '../models/athletes'

export interface Auth extends Resource {
  Auth: {
    authorize: Method<AuthorizeParams, AuthorizeResponse>
    deauthorize: Method<DeauthorizeParams, DeauthorizeResponse>
    refresh: Method<RefreshParams, RefreshResponse>
  }
}

export interface RefreshResponse {
  access_token: string
  expires_at: number
  expires_in: number
  refresh_token: string
  token_type: 'Bearer'
}

export interface DeauthorizeResponse {
  access_token: string
}

export interface AuthorizeResponse {
  access_token: string
  athlete: SummaryAthlete
  expires_at: number
  expires_in: number
  refresh_token: string
  token_type: 'Bearer'
}

export interface AuthorizeParams extends MappersmithParams {
  body: {
    client_id?: string
    client_secret?: string
    code: string
  }
}

export interface DeauthorizeParams extends MappersmithParams {
  body: {
    access_token: string
  }
}

export interface RefreshParams extends MappersmithParams {
  body: {
    client_id?: string
    client_secret?: string
    refresh_token: string
  }
}
