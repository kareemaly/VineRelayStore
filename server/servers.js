import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import WebpackDevServer from 'webpack-dev-server';
import IoC from 'AppIoC';
import historyApiFallback from 'connect-history-api-fallback';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './logger';

const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 8080;
const APP_PORT = process.env.APP_PORT || 3000;
const host = process.env.HOST || 'localhost';

const appBuildDirectory = path.resolve(process.cwd(), 'build');

/**
 * Run frontend application development server.
 *
 * This requires a graphql server running on GRAPHQL_PORT.
 */
export async function runRelayDevServer() {
  // Launch Relay by using webpack.config.js
  const webpackConfig = require('../internals/webpack/webpack.app.config');
  const relayServer = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: '/build/',
    proxy: {
      '/graphql': `http://${host}:${GRAPHQL_PORT}`,
      '/api/v1': `http://${host}:${GRAPHQL_PORT}`
    },
    stats: {
      colors: true,
      chunks:false
    },
    hot: true,
    historyApiFallback: true
  });

  // Serve static resources
  relayServer.use('/', express.static(appBuildDirectory));
  relayServer.listen(APP_PORT, host, () => {
    logger.appStarted(APP_PORT, host);
  });
}

/**
 * Run graphql development server.
 */
export async function runGraphQLDevServer() {
  // Bootstrap server application
  require('./bootstrap');

  // Things to resolve
  const graphqlSchema = await IoC.resolve('graphqlSchema');
  const errorMiddleware = await IoC.resolve('errorMiddleware');

  // Configure express
  const expressApp = express();
  expressApp.use(bodyParser.json());
  expressApp.use(cors());
  // Configure GraphQL with graphiql UI.
  expressApp.use('/graphql', graphQLHTTP({
    graphiql: true,
    pretty: true,
    schema: graphqlSchema,
    formatError: (error) => {
      console.error(error);
      return error.originalError ? error.originalError.toObject() : error.toObject();
    },
  }));
  expressApp.use(errorMiddleware.log.bind(errorMiddleware));
  expressApp.use(errorMiddleware.response.bind(errorMiddleware));
  expressApp.listen(GRAPHQL_PORT, () => {
    logger.graphqlStarted(GRAPHQL_PORT, host);
  });
}

export async function runProductionServer() {
  throw new Error("Not implemented");
}
