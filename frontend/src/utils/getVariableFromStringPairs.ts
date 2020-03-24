import { fromPairs, map, pipe, propOr, split } from 'ramda'

export default (variable: string) =>
  pipe<Array<string>, Array<[string, string]>, Record<string, string>, string>(
    map(pipe<string, string, [string, string]>(decodeURIComponent, (split as any)('='))),
    fromPairs,
    propOr('', variable)
  )
