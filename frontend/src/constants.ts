export const MINUTE = 60
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR
export const BACKEND_PRODUCTION_HOST = `https://strava-maps.herokuapp.com`
export const BACKEND_DEV_HOST = `http://localhost:8080`
export const BACKEND_HOST =
  process.env.NODE_ENV === 'production' ? BACKEND_PRODUCTION_HOST : BACKEND_DEV_HOST
export const FRONTEND_PRODUCTION_HOST = 'https://strava.tokks.tech'
export const FRONTEND_DEV_HOST = 'http://localhost:3000'
export const FRONTEND_HOST =
  process.env.NODE_ENV === 'production' ? FRONTEND_PRODUCTION_HOST : FRONTEND_DEV_HOST
