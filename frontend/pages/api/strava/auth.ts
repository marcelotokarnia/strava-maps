import { NextApiRequest, NextApiResponse } from 'next'

const STRAVA_CLIENT_ID = `client_id=${process.env.STRAVA_CLIENT_ID}`
const STRAVA_OAUTH_ENDPOINT = 'https://www.strava.com/oauth/authorize'
const LOGIN_ROUTE = 'redirect_uri=https://strava.tokks.tech/login'
const RESPONSE_TYPE = 'response_type=code'
const SCOPE = 'scope=activity:read_all,read_all,profile:read_all'
const STRAVA_ENDPOINT = `${STRAVA_OAUTH_ENDPOINT}?${STRAVA_CLIENT_ID}&${LOGIN_ROUTE}&${RESPONSE_TYPE}&${SCOPE}`

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      if (req.cookies.username && req.cookies.access_token) {
        if (match) {
          res.setHeader('Set-Cookie', `username=${username}`)
          res.setHeader('Set-Cookie', `access_token=${access_token}`)
          return res
            .writeHead(307, {
              Location: '/login?code=cached',
            })
            .end()
        }
      }
      return res
        .writeHead(307, {
          Location: STRAVA_ENDPOINT,
        })
        .end()

    case 'POST':
      //   const x = req.cookies.username
      //   res.statusCode = 200
      //   res.setHeader('Set-Cookie', `username=${username}`)
      //   res.setHeader('Set-Cookie', `access_token=${access_token}`)
      return res.end(JSON.stringify({ name: 'John Doe' }))
    default:
      return res.status(405).end()
  }
}
