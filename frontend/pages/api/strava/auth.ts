import { NextApiRequest, NextApiResponse } from 'next'
import forwardToRemote from 'api/forwardToRemote'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const remoteResponse = await forwardToRemote(req, res)
  switch (req.method) {
    case 'GET':
      console.log(remoteResponse.data.redirectUri)
      return res
        .writeHead(307, {
          Location: remoteResponse.data.redirectUri,
        })
        .end()

    case 'POST':
      return res.json(remoteResponse.data)
    default:
      return res.status(405).end()
  }
}
