require('./environment')
require('./error/handler')

const Koa = require('koa')
const redisConnect = require('./middlewares/redis')
const mysqlConnect = require('./middlewares/mysql')
const getConfig = require('./libs/get.config')
const logger = require('./libs/logger')

const config = getConfig('/configs/config.yml')
const app = new Koa()

app.on('error', (e) => {
  logger.error(`${e.stack}`)
})

app.use(redisConnect())
app.use(mysqlConnect())

app.listen(config.port, (e) => {
  if (e) { throw e }
  logger.info('server start successfully ！！！🚀')
})
