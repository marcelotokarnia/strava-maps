import { AsyncLocalStorage } from 'async_hooks'
export const mapAsyncLocalStorage = new AsyncLocalStorage<Map<string, any>>()
