import { install, uninstall } from 'mappersmith/test'
import { authorize as authorizeFixture } from '@tokks/strava/fixtures'
import createServer from '@src/server'
import extractCookies from '@src/utils/tests/extractCookies'
import request from 'supertest'
import stravaMocker from '@tokks/strava/mocks/e2eCalls'

jest.mock('../../middlewares/redis', require('../../utils/tests/mockRedis').default)

let agent, server
describe('POST /strava/auth', () => {
  beforeEach(done => {
    server = createServer(() => {
      agent = request(server)
      done()
    })
  })
  afterEach(done => {
    return server && server.close(done)
  })
  beforeEach(install)
  afterEach(uninstall)
  it('should call strava api and return token information', async () => {
    const mockedAuth = stravaMocker.Auth.authorize()
    const code = 'secret_code'
    const response = await agent.post('/strava/auth').send({ code }).expect(200)
    const cookies = extractCookies(response.headers)
    expect(mockedAuth.callsCount()).toBe(1)
    const body = JSON.parse(mockedAuth.mostRecentCall().body() as string)
    expect(body).toMatchObject({
      code,
      grant_type: 'authorization_code',
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_SECRET,
    })
    expect(cookies.access_token.value).toEqual(authorizeFixture.access_token)
  })
})
