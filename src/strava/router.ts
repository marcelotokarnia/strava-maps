import { AsyncRouter } from 'express-async-router'
import { strava } from '../clients'

const router = AsyncRouter()
router.post('/auth', async (req, res) => {
  const { access_token, expires_in } = await strava.auth(req?.body?.code)
  res.cookie('access_token', access_token, { maxAge: expires_in * 1000 })
  res.sendStatus(204)
})

export default router
