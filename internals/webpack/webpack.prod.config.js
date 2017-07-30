const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const configureWebpack = require('./webpack.base.config');

const clientDirectory = path.resolve(process.cwd(), 'app');

const htmlTemplate = new HtmlWebpackPlugin({
  title: 'Store Web Application',
  mobile: true,
  inject: false,
});

module.exports = configureWebpack({
  entry: {
    app: [ path.join(clientDirectory, 'index.js') ],
    vendor: ['react', 'react-dom', 'react-relay', 'react-router'],
  },
  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(clientDirectory, 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],
  devtool: 'eval',
});
