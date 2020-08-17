import { NextFunction, Request, Response } from 'express'
import cookie from 'cookie'

export default ({ headerName = 'x-cookie' } = {}) => (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const cookies = req.headers[headerName]
  req.cookies = cookies ? cookie.parse(cookies) : Object.create(null)
  next()
}
