const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.dev.conf.js')

const compiler = Webpack(webpackConfig)
const devServerOptions = {
  hot: true,
  hotOnly: true,
  open: true, 
  stats: "errors-only"  // 只在发生错误时输出
}

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen('8080', '127.0.0.1');