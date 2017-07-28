const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const configureWebpack = require('./webpack.base.config');

const host = process.env.HOST || 'localhost';
const port = process.env.APP_PORT || 3000;
const clientDirectory = path.resolve(process.cwd(), 'app');

const htmlTemplate = new HtmlWebpackPlugin({
  title: 'Store Web Application',
  template: path.join(clientDirectory, 'index.html'),
  mobile: true,
  inject: false,
});

module.exports = configureWebpack({
  host,
  port,
  clientDirectory,
  htmlTemplate,
});
