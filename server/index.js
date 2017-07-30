require("babel-core/register");
require("babel-polyfill");

import fs from 'fs';
import path from 'path';
import logger from './logger';
import {
  runRelayDevServer,
  runGraphQLDevServer,
  runProductionServer,
} from './servers';

let promise;

/**
 * On production run production server which runs graphql server and hosts app build folder.
 */
if(process.env.NODE_ENV === 'production')
{
  promise = runProductionServer();
}
/**
 * On development each server runs separately.
 * So track argument passed to run the correct server
 */
else
{
  switch(process.argv[2]) {
    case 'graphql':
      promise = runGraphQLDevServer();
      break;

    case 'app':
      promise = runRelayDevServer();
      break;

    default:
      throw new Error("You have to pass either `graphql` or `app` in development");
  }
}

promise.then(null, logger.error);
