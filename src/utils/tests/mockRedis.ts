export default (): any => {
  const { KEYS, TIME_IN_SECONDS } = jest.requireActual('../../middlewares/redis')
  const memory = {}
  return {
    __esModule: true,
    KEYS,
    TIME_IN_SECONDS,
    default: (req, _, next) => {
      req.redis = {
        get: key => memory[key],
        set: (key, value) => (memory[key] = value),
      }
      next()
    },
  }
}
