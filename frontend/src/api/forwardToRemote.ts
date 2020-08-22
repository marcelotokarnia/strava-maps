import axios, { Method } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { BACKEND_HOST } from '../constants'

const cookieNames = (cookiesStr?: string): Array<string> => {
  const cookies = cookiesStr?.split?.(', ') ?? []
  return cookies.map(cookieStr => cookieStr.split('; ')?.[0].split('=')?.[0])
}

export default async ({ url, method, body, headers }: NextApiRequest, res: NextApiResponse) => {
  const endpoint = `${BACKEND_HOST}${url.replace('/api', '')}`
  const response = await axios({
    url: endpoint,
    method: method as Method,
    ...(body ? { data: body } : {}),
    ...(headers.cookie ? { headers: { 'x-cookie': headers.cookie } } : {}),
  })

  if (response.headers['x-set-cookie']) {
    const cookies = response.headers['x-set-cookie']
    const setCookieKeys = cookieNames(cookies)
    const eraseCookies = setCookieKeys.map(
      k => `${k}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
    )
    res.setHeader('set-cookie', [...eraseCookies, ...cookies.split(', ')])
  }
  return response
}
