const router = require('koa-router')

router
  .post('/register')
  .post('/login')
  .get('/auth')

module.exports = router
