const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')
const YAML = require('yaml')

const generalConfig = fs.readFileSync('../config.yml', 'utf8')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: { port: YAML.parse(generalConfig)["clientPort"]},
  publicPath: '',
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    }
  }
})