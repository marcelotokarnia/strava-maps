import { Method, Resource } from '.'
import { Athlete } from '../models/athletes'
import { RequestParams } from 'mappersmith'

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
  athlete: Athlete
  expires_at: number
  expires_in: number
  refresh_token: string
  token_type: 'Bearer'
}

export interface AuthorizeParams extends RequestParams {
  body: {
    client_id?: string
    client_secret?: string
    code: string
  }
}

export interface DeauthorizeParams extends RequestParams {
  body: {
    access_token: string
  }
}

export interface RefreshParams extends RequestParams {
  body: {
    client_id?: string
    client_secret?: string
    refresh_token: string
  }
}
