const sequelize = require('./orm')

const User = require('./models/User')

module.exports = {
  sequelize,
  User,
}
