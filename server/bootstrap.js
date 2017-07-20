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


async function updateDescription() {
  const brandModel = await IoC.resolve('brandModel');
  return brandModel.update({ slug: 'tls-professional' }, {
    description: "Lorem Ipsum is simply dummy text   of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  });
}

// updateDescription().then(console.log, console.log);
