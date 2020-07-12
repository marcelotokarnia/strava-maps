import { drop, fromPairs, map, pathOr, pipe, propOr, split } from 'ramda'

const getVariableFromStringPairs = (variable: string) =>
  pipe<Array<string>, Array<[string, string]>, Record<string, string>, string>(
    map(pipe<string, string, [string, string]>(decodeURIComponent, (split as any)('='))),
    fromPairs,
    propOr('', variable)
  )

export const getCookieVariable = (variable: string): string =>
  pipe<Window, string, Array<string>, string>(
    pathOr('', ['document', 'cookie']),
    split('; '),
    getVariableFromStringPairs(variable)
  )(window)

export const getQueryVariable = (variable: string): string =>
  pipe<Window, string, string, Array<string>, string>(
    pathOr('', ['location', 'search']),
    drop(1),
    split('&'),
    getVariableFromStringPairs(variable)
  )(window)
