'use strict'

const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDatabsae (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}
