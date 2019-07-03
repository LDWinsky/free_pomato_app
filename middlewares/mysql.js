const Sequelize = require('sequelize')
const root = require('app-root-path')

const getConfig = root.require('/libs/get.config')
const config = getConfig('/configs/config.yml')

module.exports = () => {
  const sequelize = new Sequelize('pomatodo', 'root', 'Edison775800', {
    host: 'localhost',
    dialect: 'mysql',
  })
  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err)
    })

  return async (ctx, next) => {
    ctx.sequelize = sequelize
    await next()
  }
}
