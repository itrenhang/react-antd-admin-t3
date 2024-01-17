const path = require('path');
const webpack = require("webpack");

const environmentPlugin = new webpack.EnvironmentPlugin({
  DEPLOY_ENV: process.env.DEPLOY_ENV || "test"
});

module.exports = {
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
    },
    configure(webpackConfig, { env, paths }){
      webpackConfig.plugins.push(environmentPlugin)
      return webpackConfig
    }
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    compress: false,
    proxy: {
      '/api': {
          // target: 'http://192.168.8.142:8000/',
          target: 'https://chatbot.funpinpin.top/',
          // target: 'https://chatbot.xunluai.com/',
          changeOrigin: true,
      }
    }
  }
};