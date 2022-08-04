const { Sequelize } = require('sequelize')
const { config } = require('../config/config')

const sequelize = new Sequelize(`postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`)

module.exports = sequelize
