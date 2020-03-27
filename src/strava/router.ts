import { AsyncRouter } from 'express-async-router'
import { pick } from 'ramda'
import { strava } from '../clients'

const router = AsyncRouter()
router.post('/auth', async req =>
  pick(['access_token', 'expires_in', 'athlete'])(await strava.auth(req?.body?.code))
)

export default router
