import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

export default (preloadedState?) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  })

  if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
