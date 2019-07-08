const Sequelize = require('sequelize')
const root = require('app-root-path')

const logger = root.require('libs/logger')
const getConfig = root.require('/libs/get.config')
const {
  database, user, password, ...dbOpts
} = getConfig('/configs/config.yml')

const sequelize = new Sequelize(database, user, password, dbOpts)

sequelize.authenticate()
  .then(() => {
    logger.info('Connection has been established successfully.')
  })
  .catch((err) => {
    logger.error(`Unable to connect to the database: ${err.stack}`)
    process.exit(1)
  })

module.exports = sequelize
