require('./environment')
require('./error/handler')

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const redisConnect = require('./middlewares/redis')
const getConfig = require('./libs/get.config')
const logger = require('./libs/logger')
const routes = require('./routes')

const config = getConfig('/configs/config.yml')
const app = new Koa()

app.on('error', (e) => {
  logger.error(`${e.stack}`)
})

app.use(redisConnect())
app.use(bodyParser({
  onerror(err, ctx) {
    ctx.throw('body parse error', 422)
  },
}))
app.use(routes.routes())

app.listen(config.port, (e) => {
  if (e) { throw e }
  logger.info('server start successfully ！！！🚀')
})
