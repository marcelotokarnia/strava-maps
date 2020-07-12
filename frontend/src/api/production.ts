import forge from 'mappersmith'
import jsonMiddleware from 'mappersmith/middlewares/encode-json'
import { BACKEND_HOST } from '../constants'

const API = forge({
  host: BACKEND_HOST,
  middleware: [jsonMiddleware],
  resources: {
    strava: {
      auth: {
        method: 'post',
        path: '/strava/auth',
      },
    },
    map: {
      save: {
        method: 'post',
        path: '/map/save',
      },
      getColabRoute: {
        method: 'get',
        path: '/map/colab/{id}',
      },
    },
    graphql: {
      getData: {
        method: 'post',
        path: '/graphql',
      },
    },
  },
}) as any

export default API
