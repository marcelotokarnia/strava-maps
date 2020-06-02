import { AsyncLocalStorage } from 'async_hooks'
export const stravaAsyncLocalStorage = new AsyncLocalStorage<Map<string, any>>()
