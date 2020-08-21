import { NextApiRequest, NextApiResponse } from 'next'
import forwardToRemote from 'api/forwardToRemote'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const remoteResponse = await forwardToRemote(req, res)
  return res
    .writeHead(307, {
      Location: remoteResponse.data.redirectUri,
    })
    .end()
}
