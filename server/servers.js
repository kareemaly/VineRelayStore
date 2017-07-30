import path from 'path';
import fs from 'fs';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import IoC from 'AppIoC';
import historyApiFallback from 'connect-history-api-fallback';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import {
  addFrontendDevMiddlewares,
  addFrontendProdMiddlewares,
} from './frontendMiddleware';
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
  const relayServer = express();

  addFrontendDevMiddlewares(relayServer, {
    proxy: {
      '/graphql': `http://${host}:${GRAPHQL_PORT}`,
      '/api/v1': `http://${host}:${GRAPHQL_PORT}`
    },
  });

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
  const authMiddleware = await IoC.resolve('authMiddleware');

  // Configure express
  const expressApp = express();
  expressApp.use(authMiddleware.setViewer.bind(authMiddleware));
  expressApp.use(bodyParser.json());
  expressApp.use(cors());
  // Configure GraphQL with graphiql UI.
  expressApp.use('/graphql', graphQLHTTP({
    graphiql: true,
    pretty: true,
    schema: graphqlSchema,
    formatError: (error) => {
      return error.originalError ? error.originalError.toObject() : error.toObject();
    },
  }));
  expressApp.use(errorMiddleware.log.bind(errorMiddleware));
  expressApp.use(errorMiddleware.response.bind(errorMiddleware));
  expressApp.listen(GRAPHQL_PORT, () => {
    logger.graphqlStarted(GRAPHQL_PORT, host);
  });
}

/**
 * Running both GraphQL and Frontend applications.
 */
export async function runProductionServer() {
  // Bootstrap server application
  require('./bootstrap');

  // Things to resolve
  const graphqlSchema = await IoC.resolve('graphqlSchema');
  const errorMiddleware = await IoC.resolve('errorMiddleware');
  const authMiddleware = await IoC.resolve('authMiddleware');

  // Configure express
  const expressApp = express();
  expressApp.use(authMiddleware.setViewer.bind(authMiddleware));
  expressApp.use(bodyParser.json());
  expressApp.use(cors());
  // Configure GraphQL
  expressApp.use('/graphql', graphQLHTTP({
    schema: graphqlSchema,
    formatError: (error) => {
      return error.originalError ? error.originalError.toObject() : error.toObject();
    },
  }));

  addFrontendProdMiddlewares(expressApp);

  expressApp.use(errorMiddleware.log.bind(errorMiddleware));
  expressApp.use(errorMiddleware.response.bind(errorMiddleware));

  expressApp.listen(GRAPHQL_PORT, () => {
    logger.graphqlStarted(GRAPHQL_PORT, host);
  });
}
