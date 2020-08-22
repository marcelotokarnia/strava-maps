import { assoc } from 'ramda'
import { Middleware } from 'mappersmith'

export default (keys: Array<string>): Middleware => () => ({
  prepareRequest: (next: any) =>
    next().then((request: any) => {
      const originalParams = request.params()
      return request.enhance({
        params: {
          ...originalParams,
          ...keys.reduce((acc, k) => assoc(k, encodeURIComponent(originalParams[k]), acc), {}),
        },
      })
    }),
})
