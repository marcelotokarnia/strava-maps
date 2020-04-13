export default () => {
  const stravaAuthFixture = jest.requireActual('../../fixtures/stravaAuthentication').default
  return {
    __esModule: true,
    default: {
      auth: jest.fn().mockReturnValue(stravaAuthFixture),
    },
  }
}
