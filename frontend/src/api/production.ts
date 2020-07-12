import { API as APIType } from 'interfaces/api'
import { BACKEND_HOST } from '../constants'
import forge from 'mappersmith'
import jsonMiddleware from 'mappersmith/middlewares/encode-json'

const API: APIType = forge({
  host: BACKEND_HOST,
  middleware: [jsonMiddleware],
  resources: {
    meta: {
      tags: {
        method: 'post',
        path: '/meta/tags',
      },
    },
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
})

export default API
