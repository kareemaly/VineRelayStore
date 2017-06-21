import IoC from 'AppIoC';
import mongoose from 'mongoose';
import * as Q from 'q';

// Mongodb connection
const configureDatabase = async () => {
  // For backwards compatibility, Mongoose 4 returns mpromise promises by default.
  // Plugging in your own Promises Library (i.e.: Q.Promise)
  mongoose.Promise = Q.Promise;
  return await mongoose.createConnection(process.env.MONGODB_URI);
}

// Register connection
IoC.callable('configureMongoose', [], configureDatabase);
