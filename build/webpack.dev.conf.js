const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')
const config = require('../config')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    main: './example/main.js'
  },
  module: {
    rules: [
      ...utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html'
    }),
    
  ],
})
