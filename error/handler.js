const root = require('app-root-path')

const logger = root.require('/libs/logger')
const process = require('process')

process.on('uncaughtException', (e) => {
  process.exit()
  logger.error(`${e.stack}`)
})
