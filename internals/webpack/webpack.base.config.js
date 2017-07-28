const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

require('dotenv').config();

const NODE_ENV = process.env.NODE_ENV;

module.exports = ({ host, port, clientDirectory, htmlTemplate }) => {
  let appEntry;
  let devtool;
  let plugins;

  if (NODE_ENV === 'production') {
    appEntry = [
      path.join(clientDirectory, 'index.js'),
    ];
    devtool = 'source-map';
    plugins = [
      new LodashModuleReplacementPlugin,
      new webpack.DefinePlugin(prepareProcessVariables()),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
        },
      }),
      htmlTemplate,
    ];
  } else {
    appEntry = [
      path.join(clientDirectory, 'index.js'),
      `webpack-dev-server/client?http://${host}:${port}`,
      'webpack/hot/only-dev-server',
    ];
    devtool = 'eval';
    plugins = [
      new LodashModuleReplacementPlugin,
      new webpack.DefinePlugin(prepareProcessVariables()),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      htmlTemplate,
    ];
  }

  return {
    entry: {
      app: appEntry,
      vendor: ['react', 'react-dom', 'react-relay', 'react-router'],
    },
    output: {
      path: path.join(__dirname, 'build'),
      publicPath: '/',
      filename: '[name].js',
    },
    devtool,
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader?forceEnv=relay',
        exclude: /node_modules/,
      },{
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000&name=assets/[hash].[ext]',
      }]
    },
    plugins
  };
}

const prepareProcessVariables = () => {
  let envVariables = {};
  for(let key in process.env) {
    if(process.env.hasOwnProperty(key)) {
      envVariables[`process.env.${key}`] = JSON.stringify(process.env[key]);
    }
  }
  return envVariables;
}
