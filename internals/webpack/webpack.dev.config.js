const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const configureWebpack = require('./webpack.base.config');

const clientDirectory = path.resolve(process.cwd(), 'app');

module.exports = configureWebpack({
  entry: [
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true',
    path.join(clientDirectory, 'index.js'),
    // `webpack-dev-server/client?http://${host}:${port}`,
    // 'webpack/hot/only-dev-server',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(clientDirectory, 'index.html'),
      inject: true,
    }),
  ],
  devtool: 'eval',
  babelPresets: [
    "babel-preset-react-hmre",
  ],
});
