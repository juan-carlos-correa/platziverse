'use strict'

const setUpDatabase = require('./lib/db')
const setUpAgentModel = require('./models/agent')
const setUpMetricModel = require('./models/metric')

module.exports = async function (config) {
  const sequelize = setUpDatabase(config)
  const AgentModel = setUpAgentModel(config)
  const MetricModel = setUpMetricModel(config)

  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Agent = {}
  const Metrict = {}

  return {
    Agent,
    Metrict
  }
}
