const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.config.common')

module.exports = merge(common, {
  entry: {
    entry1: path.resolve(__dirname, '../src/entry1.js'),
    entry2: path.resolve(__dirname, '../src/entry2.js')
  }
})