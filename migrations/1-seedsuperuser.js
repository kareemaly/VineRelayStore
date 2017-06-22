import IoC from 'AppIoC';
import 'server/bootstrap';

export const id = "seedSuperUser";

export const up = async function (done) {
  // Resolve superUserSeeder
  const superUserSeeder = await IoC.resolve('superUserSeeder');

  // Run super user seeder to create super user in database
  // This is expected to fail if super user already exists
  try {
    await superUserSeeder.up();
    done();
  } catch(err) {
    done(err);
  }
};

export const down = async function (done) {
  // Resolve superUserSeeder
  const superUserSeeder = await IoC.resolve('superUserSeeder');

  // Run super user seeder to create super user in database
  // This is expected to fail if super user already exists
  try {
    await superUserSeeder.down();
    done();
  } catch(err) {
    done(err);
  }
};
