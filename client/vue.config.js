const { defineConfig } = require('@vue/cli-service')

const fs = require('fs')
const YAML = require('yaml')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '/',
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    },
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
      ignored: /node_modules/
    }
  }
})