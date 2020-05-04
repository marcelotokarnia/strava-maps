import path from 'path'

export default args => {
  const commands = require('./commands')
  const yargs = require('yargs')
  const yargsBase = args ? yargs(args) : yargs
  return yargsBase
    .usage('Usage: xml2strava <command> [options]')
    .option('verbose', {
      alias: 'v',
      describe: 'shows stdout & stderr for every command executed',
      default: false,
    })
    .option('startTime', {
      alias: 's',
      describe: 'Desired startTime',
    })
    .option('endTime', {
      alias: 'e',
      describe: 'Desired endTime',
    })
    .command(
      'insertTime [file]',
      `insert activity time in a timeless xml file`,
      yargs => yargs,
      commands.insertTime
    )
    .strict()
    .help('help')
    .alias('help', 'h')
    .coerce(['file'], path.resolve).argv
}
