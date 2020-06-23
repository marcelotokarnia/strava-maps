import { KEYS, TIME } from '../../redisMiddleware'
import { mapAsyncLocalStorage } from '../'
import { screenshooter } from '../../clients'
import { v4 as uuidv4 } from 'uuid'
import wait from 'waait'

const saveOGImagetag = async ({ redis, access_token, username, uuid }, waitTimes) => {
  const waitTime = waitTimes.pop()
  console.log({ waitTime })
  if (!waitTime) {
    return // TODO maybe place a default
  }
  try {
    const url = `https://strava-maps.herokuapp.com/login?code=${username}::${access_token}&redirectTo=/map`
    const cloudinaryUrl = await screenshooter.shoot({ url, waitTime, filename: uuid })
    console.log({ cloudinaryUrl, uuid })
    return await redis.set(KEYS.STRAVA_SCREENSHOT(uuid), cloudinaryUrl, 'EX', 7 * TIME.DAY)
  } catch (e) {
    console.log({ e })
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
  console.log({ lat, lng, zoom, username })
  saveOGImagetag({ redis, access_token, username, uuid }, waitTimes)
  redis.set(KEYS.SAVED_MAP(uuid), { username, lat, lng, zoom }, 'EX', 7 * TIME.DAY)
  return uuid
}
