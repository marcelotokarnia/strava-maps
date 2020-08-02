import { ClientRequestResponse } from '.'

export interface Auth {
  Auth: {
    authorize: (params: AuthorizeParams) => Promise<ClientRequestResponse<AuthorizeResponse>>
    deauthorize: (params: DeauthorizeParams) => Promise<ClientRequestResponse<DeauthorizeResponse>>
    refresh: (params: RefreshParams) => Promise<ClientRequestResponse<RefreshResponse>>
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
  athlete: any // TODO Profile
  expires_at: number
  expires_in: number
  refresh_token: string
  token_type: 'Bearer'
}

export type AuthorizeParams = {
  body: {
    client_id?: string
    client_secret?: string
    code: string
  }
}

export type DeauthorizeParams = {
  body: {
    access_token: string
  }
}

export type RefreshParams = {
  body: {
    client_id?: string
    client_secret?: string
    refresh_token: string
  }
}
