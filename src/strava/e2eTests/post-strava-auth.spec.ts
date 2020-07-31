import createServer from '@src/server'
import extractCookies from '@src/utils/tests/extractCookies'
import request from 'supertest'
import { default as strava } from '@src/clients/strava'
import stravaAuthentication from '@src/fixtures/stravaAuthentication'

jest.mock('../../clients/strava', require('../../utils/tests/mockStrava').default)
jest.mock('../../middlewares/redis', require('../../utils/tests/mockRedis').default)

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
    const response = await agent.post('/strava/auth').send({ code }).expect(200)
    const cookies = extractCookies(response.headers)
    expect(strava.auth).toHaveBeenCalledTimes(1)
    expect(strava.auth).toHaveBeenCalledWith(code)
    expect(cookies.access_token.value).toEqual(stravaAuthentication.access_token)
  })
})
