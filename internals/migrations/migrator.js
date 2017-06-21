import mm from 'mongodb-migrations';

require('dotenv').config();

const config = {
  url: process.env.MONGODB_URI,
};

export default new mm.Migrator(config);
