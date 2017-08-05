import fs from 'fs';
import mm from 'mongodb-migrations';
import path from 'path';

if (fs.existsSync(path.join(process.cwd(), '.env'))) {
  require('dotenv').config();
}

const config = {
  url: process.env.MONGODB_URI,
};

export default new mm.Migrator(config);
