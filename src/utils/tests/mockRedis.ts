export default () => {
  const { KEYS } = jest.requireActual('../../redisMiddleware')
  const memory = {}
  return {
    __esModule: true,
    KEYS,
    default: (req, _, next) => {
      req.redis = {
        get: key => memory[key],
        set: (key, value) => (memory[key] = value),
      }
      next()
    },
  }
}
