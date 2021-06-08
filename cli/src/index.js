import * as commands from './commands'
import path from 'path'
import yargs from 'yargs'

export default args => {
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
    .command(
      'removeNoise [file]',
      `remove a chunk of your activity from a xml due to gps failure / imprecision or whatever reason`,
      yargs => yargs,
      commands.removeNoise
    )
    .command('gpx2poly [file]', `convert a gpx file to polyline`, yargs => yargs, commands.gpx2poly)
    .command(
      'arr2poly [file]',
      `convert a json array file to polyline`,
      yargs => yargs,
      commands.arr2poly
    )
    .strict()
    .help('help')
    .alias('help', 'h')
    .coerce(['file'], path.resolve)
    .coerce(['startTime', 'endTime'], p => new Date(p)).argv
}
