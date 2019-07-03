const Redis = require('ioredis')
const root = require('app-root-path')

const getConfig = root.require('/libs/get.config')
const config = getConfig('/configs/config.yml')

module.exports = () => {
  const redis = new Redis({
    ...config.redis.init_opts,
    retryStrategy: times => Math.min(times * 50, config.redis.longest_reconnect_take),
  })

  redis.on('error', (e) => {
    throw e
  })

  return async (ctx, next) => {
    if (redis.status === 'connecting') {
      ctx.redis = redis
      await next()
    } else {
      throw Error(
        'redis is no ready',
      )
    }
  }
}
