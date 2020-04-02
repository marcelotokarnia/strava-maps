// taken from https://gist.github.com/the-vampiire/a564af41ed0ce8eb7c30dbe6c0f627d8

export const shapeFlags = flags =>
  flags.reduce((shapedFlags, flag) => {
    const [flagName, rawValue] = flag.split('=')
    const value = rawValue ? rawValue.replace(';', '') : true
    return { ...shapedFlags, [flagName]: value }
  }, {})

export default headers => {
  const cookies = headers['set-cookie']

  return cookies.reduce((shapedCookies, cookieString) => {
    const [rawCookie, ...flags] = cookieString.split('; ')
    const [cookieName, value] = rawCookie.split('=')
    return { ...shapedCookies, [cookieName]: { value, flags: shapeFlags(flags) } }
  }, {})
}
