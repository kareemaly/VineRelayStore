const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

if (fs.existsSync(path.join(process.cwd(), '.env'))) {
  require('dotenv').config();
}

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output), // Merge with env dependent settings
  plugins: [
    new webpack.DefinePlugin(prepareProcessVariables()),
    new webpack.NamedModulesPlugin(),
  ].concat(options.plugins),
  devtool: options.devtool,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        "plugins": [ "relay" ],
        "presets": [
          [
            "latest",
            {
              "es2015": {
                "modules": false
              }
            }
          ],
          "react",
          "stage-0",
        ].concat(options.babelPresets || []),
      },
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
  target: 'web',
  resolve: {
    alias: getAliases(),
  }
});

const getAliases = () => {
  let aliases = {};

  const directories = getDirectories(path.resolve(process.cwd(), 'app'));

  directories.map((directory) => {
    aliases[`app/${directory}`] = path.join(process.cwd(), 'app', directory);
  });

  return aliases;
}

const getDirectories = (srcpath) => {
  return fs.readdirSync(srcpath)
    .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory())
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
