const path = require('path')
const webpack = require('webpack')
const { version } = require('../package.json')
const config = require('../config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var vueLoaderConfig = require('./vue-loader.conf')
const utils = require('./utils')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const allSource = [resolve('src'), resolve('example'), resolve('document')]

module.exports = {
  output: {
    path: resolve(config.build.assetsRoot),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue2': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'example': resolve('example')
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: allSource,
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: allSource
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      // {
      //   test: /\.md$/,
      //   include: resolve('document'),
      //   loader: 'vue-markdown-loader',
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: allSource,
        options: {
          esModule:false,
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        include: allSource,
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          '@vant/markdown-loader'
        ]
        // loader: 'vue-markdown-loader',
        // options: {
        //   preventExtract: true
        // }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(version)
    })
  ]
}