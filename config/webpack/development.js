process.env.NODE_ENV = process.env.NODE_ENV || ''

const environment = require('./environment')

module.exports = environment.toWebpackConfig()
