const Sequelize = require('sequelize')

// BD Connection
const sequelize = new Sequelize('postapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = { Sequelize, sequelize }