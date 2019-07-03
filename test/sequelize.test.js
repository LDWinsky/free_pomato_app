const Sequelize = require('sequelize')

const config = {
  host: 'localhost',
  password: 'Edison775800',
  user: 'root',
  database: 'pomatodo',
}

const {
  host, password, user, database,
} = config

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })
