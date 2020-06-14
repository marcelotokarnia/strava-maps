import { KEYS, TIME } from '../../redisMiddleware'
import { mapAsyncLocalStorage } from '../'
import { v4 as uuidv4 } from 'uuid'

export default ({ lat, lng, zoom }: { lat: number; lng: number; zoom: number }) => {
  const uuid = uuidv4()
  const store = mapAsyncLocalStorage.getStore()
  const username = store.get('username')
  const redis = store.get('redis')
  redis.set(KEYS.SAVED_MAP(uuid), { username, lat, lng, zoom }, 'EX', 7 * TIME.DAY)
  return uuid
}
