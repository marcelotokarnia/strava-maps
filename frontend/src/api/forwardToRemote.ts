import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { BACKEND_HOST } from '../constants'

const parseCookies = (cookiesStr?: string): Record<string, string> => {
  const cookies = cookiesStr?.split?.('; ') ?? []
  return Object.fromEntries(
    cookies.map(cookieStr => cookieStr.split(', ')?.[0].split('=') as [string, string])
  )
}

const buildBody = (
  body: Record<string, string> = {},
  headers: NextApiRequest['headers'] = {}
): Record<string, any> => {
  const cookies = parseCookies(headers.cookie)
  return {
    ...body,
    cookies,
  }
}

const cookieNames = (cookiesStr?: string): Array<string> => {
  const cookies = cookiesStr?.split?.(', ') ?? []
  return cookies.map(cookieStr => cookieStr.split('; ')?.[0].split('=')?.[0])
}

export default async ({ url, body, headers }: NextApiRequest, res: NextApiResponse) => {
  const endpoint = `${BACKEND_HOST}${url.replace('/api', '')}`
  const response = await axios({
    url: endpoint,
    method: 'post',
    data: buildBody(body, headers),
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
