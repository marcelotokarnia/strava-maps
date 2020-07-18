import extractCookies, { shapeFlags } from './extractCookies'
import { drop } from 'ramda'

const sampleHeaders = {
  'access-control-allow-credentials': 'true',
  connection: 'close',
  date: 'Thu, 04 Jul 2019 00:43:57 GMT',
  etag: 'W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"',
  vary: 'Origin',
  'x-set-cookie':
    'refresh_token=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVMkZzZEdWa1gxOVBEL0RqVUlXV2lvUmZhWlhuWWdJTExaUGJ2cW4xcWRVPSIsImlhdCI6MTU2MjIwMTAzNywiZXhwIjoxNTYyODA1ODM3LCJpc3MiOiJsb2NhbGhvc3QiLCJqdGkiOiI5MmQzMmY4Ni05ZmYzLTQ5OTgtOWE1Zi1jZDNkZWU1YTRmYmQifQ.6omhdrHChv4cPhfhvwz6xMK7RPsc-SCtWxHTIkBLRrw.kaJG83X6V9YBHwYPlCQ61X7KOsX7wFSfD7hnEdP0pmg; Domain=localhost; Path=/tokens; HttpOnly; SameSite=Strict',
}

describe('shapeFlags: shapes an array of ["Flag=Value"] pairs into an object', () => {
  const flags = drop(1, sampleHeaders['x-set-cookie'].split(', ')[0].split('; '))
  const output = shapeFlags(flags)

  test('returns an object of { flag: value } entries', () =>
    Object.entries({
      Domain: 'localhost',
      Path: '/tokens',
      HttpOnly: true,
      SameSite: 'Strict',
    }).forEach(flagEntry => {
      const [flagName, expectedValue] = flagEntry
      expect(output[flagName]).toBe(expectedValue)
    }))

  test('sets value to true for flags without values (boolean flags)', () => {
    expect(output.HttpOnly).toBe(true)
  })

  test('given a cookie with a single flag strips the trailing ";" character', () => {
    const singleFlagHeaders = {
      'x-set-cookie': 'cookiename=cookievalue; Domain=oneflag',
    }
    const flags = drop(1, singleFlagHeaders['x-set-cookie'].split(', ')[0].split('; '))
    expect(shapeFlags(flags)).toEqual({ Domain: 'oneflag' })
  })
})

describe('extractCookies: extracts and shapes response cookies from the x-set-cookie header', () => {
  const output = extractCookies(sampleHeaders)

  test('returns an object of { cookieName: { value, flags } } shape', () => {
    expect(output.refresh_token).toBeDefined()
    expect(output.refresh_token.value).toBeDefined()
    expect(output.refresh_token.flags).toBeDefined()
  })

  test('extracts the value of a given cookie', () => {
    expect(output.refresh_token.value).toBe(
      's%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVMkZzZEdWa1gxOVBEL0RqVUlXV2lvUmZhWlhuWWdJTExaUGJ2cW4xcWRVPSIsImlhdCI6MTU2MjIwMTAzNywiZXhwIjoxNTYyODA1ODM3LCJpc3MiOiJsb2NhbGhvc3QiLCJqdGkiOiI5MmQzMmY4Ni05ZmYzLTQ5OTgtOWE1Zi1jZDNkZWU1YTRmYmQifQ.6omhdrHChv4cPhfhvwz6xMK7RPsc-SCtWxHTIkBLRrw.kaJG83X6V9YBHwYPlCQ61X7KOsX7wFSfD7hnEdP0pmg'
    )
  })

  test('extracts and shapes the flags of the cookie', () => {
    const flags = drop(1, sampleHeaders['x-set-cookie'].split(', ')[0].split('; '))
    expect(output.refresh_token.flags).toEqual(shapeFlags(flags))
  })

  test('cookie has no additional flags: cookieName.flags is an empty object', () => {
    const noFlagsHeaders = {
      'x-set-cookie':
        'refresh_token=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVMkZzZEdWa1gxOVBEL0RqVUlXV2lvUmZhWlhuWWdJTExaUGJ2cW4xcWRVPSIsImlhdCI6MTU2MjIwMTAzNywiZXhwIjoxNTYyODA1ODM3LCJpc3MiOiJsb2NhbGhvc3QiLCJqdGkiOiI5MmQzMmY4Ni05ZmYzLTQ5OTgtOWE1Zi1jZDNkZWU1YTRmYmQifQ.6omhdrHChv4cPhfhvwz6xMK7RPsc-SCtWxHTIkBLRrw.kaJG83X6V9YBHwYPlCQ61X7KOsX7wFSfD7hnEdP0pmg;',
    }

    const output = extractCookies(noFlagsHeaders)
    expect(output.refresh_token.flags).toEqual({})
  })

  test('supports multiple cookie entries', () => {
    const multipleCookiesHeaders = {
      'x-set-cookie':
        'someothercookie=cookievalue; Domain=test;, refresh_token=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVMkZzZEdWa1gxOVBEL0RqVUlXV2lvUmZhWlhuWWdJTExaUGJ2cW4xcWRVPSIsImlhdCI6MTU2MjIwMTAzNywiZXhwIjoxNTYyODA1ODM3LCJpc3MiOiJsb2NhbGhvc3QiLCJqdGkiOiI5MmQzMmY4Ni05ZmYzLTQ5OTgtOWE1Zi1jZDNkZWU1YTRmYmQifQ.6omhdrHChv4cPhfhvwz6xMK7RPsc-SCtWxHTIkBLRrw.kaJG83X6V9YBHwYPlCQ61X7KOsX7wFSfD7hnEdP0pmg;',
    }

    const output = extractCookies(multipleCookiesHeaders)

    ;['refresh_token', 'someothercookie'].forEach(cookieName =>
      expect(output[cookieName]).toBeDefined()
    )

    expect(output.someothercookie.value).toBe('cookievalue')
    expect(output.someothercookie.flags).toEqual({ Domain: 'test' })
  })
})
