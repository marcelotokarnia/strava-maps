import createServer from '../../server'
import extractCookies from '../../utils/tests/extractCookies'
import request from 'supertest'
import { default as strava } from '../../clients/strava'
import stravaAuthentication from '../../fixtures/stravaAuthentication'

jest.mock('../../clients/strava', () => {
  const stravaAuthFixture = jest.requireActual('../../fixtures/stravaAuthentication').default
  return {
    __esModule: true,
    default: {
      auth: jest.fn().mockReturnValue(stravaAuthFixture),
    },
  }
})

let agent, server
describe('POST /strava/auth', () => {
  beforeEach(done => {
    server = createServer(() => {
      agent = request.agent(server)
      done()
    })
  })
  afterEach(done => {
    return server && server.close(done)
  })
  it('should call strava api and return token information', async () => {
    const code = 'secret_code'
    const response = await agent.post('/strava/auth').send({ code }).expect(204)
    const cookies = extractCookies(response.headers)
    expect(strava.auth).toHaveBeenCalledTimes(1)
    expect(strava.auth).toHaveBeenCalledWith(code)
    expect(cookies.access_token.value).toEqual(stravaAuthentication.access_token)
  })
})
