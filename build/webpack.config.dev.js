const webpack = require('webpack')
const config = require('./webpack.config.base')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { assign } = Object

config.output = assign(config.output, {
  filename: 'bundle/[name].js',
})

config.plugins = config.plugins.concat([
  new ExtractTextPlugin('style/[name].css')
])

module.exports = config
