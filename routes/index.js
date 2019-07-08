const root = require('app-root-path')
const Router = require('koa-router')

const users = root.require('/controllers/users')
const router = new Router()

router
  .post('/account', users.register)
  .get('/account', users.info)
  .del('/account', users.delete)

  .post('/auth', users.createToken)
  .get('/auth', users.authorizen)
  .del('/auth', users.logup)

module.exports = router
