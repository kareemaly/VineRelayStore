import glob from 'glob';
import fs from 'fs';
import path from 'path';
import IoC from 'AppIoC';

// Load dotenv env. variables
if (fs.existsSync(path.join(process.cwd(), '.env'))) {
  require('dotenv').config();
}

// Require all files to register themselves
glob.sync( path.join(__dirname, './@(middlewares|utils|config|graphql|errors)/**/*.js') ).forEach( function( file ) {
  require( path.resolve( file ) );
});

// Register secret key
IoC.value('secretKey', process.env.SECRET_KEY);
