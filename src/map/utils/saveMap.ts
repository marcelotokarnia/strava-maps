import { KEYS, TIME_IN_SECONDS } from '@src/middlewares/redis'
import { FRONTEND_PRODUCTION_HOST } from '@src/constants'
import { mapAsyncLocalStorage } from '@src/map'
import { screenshooter } from '@src/clients'
import { v4 as uuidv4 } from 'uuid'
import wait from 'waait'

const saveOGImagetag = async ({ redis, access_token, username, uuid }, waitTimes) => {
  const waitTime = waitTimes.pop()
  if (!waitTime) {
    return // TODO maybe place a default
  }
  try {
    const url = `${FRONTEND_PRODUCTION_HOST}/login?code=${username}::${access_token}&redirectTo=/map`
    const cloudinaryUrl = await screenshooter.shoot({ url, waitTime, filename: uuid })
    return await redis.set(
      KEYS.STRAVA_SCREENSHOT(uuid),
      cloudinaryUrl,
      'EX',
      30 * TIME_IN_SECONDS.DAY
    )
  } catch (e) {
    wait(waitTime)
    return saveOGImagetag({ redis, access_token, username, uuid }, waitTimes)
  }
}

export default ({ lat, lng, zoom }: { lat: number; lng: number; zoom: number }) => {
  const uuid = uuidv4()
  const store = mapAsyncLocalStorage.getStore()
  const { username, access_token } = store.get('cookies')
  const redis = store.get('redis')
  const waitTimes = [2000, 4000, 6000, 7500, 8500, 8500]
  saveOGImagetag({ redis, access_token, username, uuid }, waitTimes)
  redis.set(KEYS.SAVED_MAP(uuid), { username, lat, lng, zoom }, 'EX', 30 * TIME_IN_SECONDS.DAY)
  return uuid
}
