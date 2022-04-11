export const FRONTEND_PRODUCTION_HOST = 'https://strava.tokarnia.tech'
export const FRONTEND_DEV_HOST = 'http://localhost:3000'
export const FRONTEND_HOST =
  process.env.NODE_ENV === 'production' ? FRONTEND_PRODUCTION_HOST : FRONTEND_DEV_HOST
