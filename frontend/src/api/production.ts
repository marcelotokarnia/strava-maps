import forge from 'mappersmith'
import jsonMiddleware from 'mappersmith/middlewares/encode-json'

const API = forge({
  host: `${window.location.protocol}//${window.location.host}`,
  middleware: [jsonMiddleware],
  resources: {
    strava: {
      auth: {
        method: 'post',
        path: '/strava/auth',
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
