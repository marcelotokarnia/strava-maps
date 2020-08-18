#!/bin/node
const packageDefinition = require('../package.json')
const branch = process.argv[2]
if (/^([0-9]+)\.([0-9]+)\.([0-9]+)$/.test(packageDefinition.version) && branch !== 'master') {
  const matched = branch.match(/-([0-9]+)-/)
  const ticket = matched.length > 1 ? matched[1] : 'id'
  console.error(
    'You are trying to publish a full version of @tokks/strava-parsed in a development branch'
  )
  console.error(
    `Publishing full versions like, ${packageDefinition.version} is not allowed in development branches, like ${branch}.`
  )
  console.error(`Try publishing ${packageDefinition.version}-${ticket}.X instead.`)
  console.error(`For more information on the matter, please refer to:`)
  console.error(
    `https://github.com/marcelotokarnia/strava-maps/blob/master/packages/strava/docs/versions.md`
  )
  process.exit(1)
}
process.exit(0)
