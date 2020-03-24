import { AsyncRouter } from 'express-async-router'
import { strava } from '../clients'

const router = AsyncRouter()
router.post('/auth', async req => strava.auth(req?.body?.code))

export default router
