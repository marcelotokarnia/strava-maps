import { keys } from 'ramda'
import { Response } from 'express'

export default (res: Response, cookies: Record<string, string>) => {
  res.setHeader(
    'X-Set-Cookie',
    keys(cookies).map(key => `${key}=${cookies[key]}; Path=/`)
  )
}

export const clearCookies = (res: Response, cookieNames: Array<string>) => {
  res.setHeader(
    'X-Set-Cookie',
    cookieNames.map(name => `${name}=""; expires=Thu, 01-Jan-1970 00:00:00 GMT; Max-Age=0; Path=/`)
  )
}
