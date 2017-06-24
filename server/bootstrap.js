import IoC from 'AppIoC';
import glob from 'glob';
import fs from 'fs';
import path from 'path';

// Load dotenv env. variables
if (fs.existsSync(path.join(process.cwd(), '.env'))) {
  require('dotenv').config();
}

const registeredDirectories = [
  'auth',
  'config',
  'errors',
  'graphql',
  'middlewares',
  'store',
  'utils',
];

// Require all files to register themselves
glob.sync( path.join(__dirname, `./@(${registeredDirectories.join('|')})/**/*.js`) ).forEach( function( file ) {
  require( path.resolve( file ) );
});
