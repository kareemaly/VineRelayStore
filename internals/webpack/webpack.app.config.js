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
  envVariables: {
    'process.env.GRAPHQL_PORT': JSON.stringify(process.env.GRAPHQL_PORT || 8080),
    'process.env.GRAPHQL_HOST': JSON.stringify(process.env.GRAPHQL_HOST || 'localhost'),
  },
});
