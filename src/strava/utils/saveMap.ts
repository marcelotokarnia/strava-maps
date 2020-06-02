import { stravaAsyncLocalStorage } from '../'
import { v4 as uuidv4 } from 'uuid'

export default ({ lat, lng, zoom }: { lat: number; lng: number; zoom: number }) => {
  const uuid = uuidv4()
  const store = stravaAsyncLocalStorage.getStore()
  const username = store.get('username')
  const redis = store.get('redis')
  redis.set(`localmap:${uuid}`, { username, lat, lng, zoom })
  return uuid
}
