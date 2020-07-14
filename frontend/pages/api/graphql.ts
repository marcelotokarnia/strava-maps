import { NextApiRequest, NextApiResponse } from 'next'
import forwardToRemote from 'api/forwardToRemote'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return res.json((await forwardToRemote(req, res)).data)
}
