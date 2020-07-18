import cookie from 'cookie'

export default ({ headerName = 'x-cookie' } = {}) => (req, res, next) => {
  const cookies = req.headers[headerName]
  req.cookies = cookies ? cookie.parse(cookies) : Object.create(null)
  next()
}
