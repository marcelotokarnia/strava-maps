import { keys } from 'ramda'
import { Response } from 'express'

export default (res: Response, cookies: Record<string, string>, maxAge?: number): void => {
  res.setHeader(
    'X-Set-Cookie',
    keys(cookies).map(
      key => `${key}=${cookies[key]}; Path=/; ${maxAge ? `Max-Age=${maxAge};` : ''}`
    )
  )
}

export const clearCookies = (res: Response, cookieNames: Array<string>): void => {
  res.setHeader(
    'X-Set-Cookie',
    cookieNames.map(name => `${name}=""; expires=Thu, 01-Jan-1970 00:00:00 GMT; Max-Age=0; Path=/`)
  )
}
