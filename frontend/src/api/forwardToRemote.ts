import axios, { Method } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { BACKEND_HOST } from '../constants'

export default async ({ url, method, body, headers }: NextApiRequest, res: NextApiResponse) => {
  const endpoint = `${BACKEND_HOST}${url.replace('/api', '')}`
  const response = await axios({
    url: endpoint,
    method: method as Method,
    ...(body ? { data: body } : {}),
    ...(headers ? { headers } : {}),
  })
  if (response.headers['set-cookie']) {
    const cookies = response.headers['set-cookie']
    res.setHeader('set-cookie', cookies)
  }
  return response
}
