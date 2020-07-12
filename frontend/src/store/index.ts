import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import rootReducer, { initialState } from './reducers'
import { RootState } from 'interfaces/store/reducers'

// create a makeStore function
const makeStore: MakeStore<RootState> = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({ immutableCheck: false, serializeCheck: false }),
    preloadedState: initialState,
  })

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true })
