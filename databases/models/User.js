const root = require('app-root-path')
const Sequelize = require('sequelize')

const sequelize = root.require('/databases/orm')

class User extends Sequelize.Model {}
User.init({
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  user_nick_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'user',
})

module.exports = User
