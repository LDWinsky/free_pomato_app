const Koa = require('koa')
const root = require('app-root-path')
const redisInit = require('./middlewares/redis')
const logger = require('./logger')

const getConfig = root.require('/helps/get.config')
const config = getConfig('/configs/session.yml')

const app = new Koa()
app.keys = config.cookie_keys

// centralize error handling
app.on('error', (err, ctx) => {
  logger.error('server err: %s', err.stack)

  ctx.status = err.status || 500
})

app.use(redisInit())

app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

app.listen(config.port, (e) => {
  if (e) {
    logger.error(e)
  } else {
    logger.info('awesome %s', config.port)
  }
})
