import IoC from 'AppIoC';
import { SUPER_USER } from 'server/auth/constants/userTypes';

export class SuperUserSeeder {
  constructor(userRepository, userModel, envConfig) {
    this.userRepository = userRepository;
    this.userModel = userModel;
    this.envConfig = envConfig;
  }

  /**
   * Create super user
   * @return {User}
   */
  async up() {
    // Check if env. variables has been defined
    if(! this.envConfig.has('SUPER_USER_EMAIL')) {
      throw new Error('SUPER_USER_EMAIL config. variable need to be defined.');
    }
    if(! this.envConfig.has('SUPER_USER_PASSWORD')) {
      throw new Error('SUPER_USER_PASSWORD config. variable need to be defined.');
    }

    // Check if super user already seeded
    const superUser = await this.userModel.findOne({
      email: this.envConfig.get('SUPER_USER_EMAIL'),
    }).exec();

    if(superUser) {
      return;
    }

    // Create super user
    return this.userModel.create({
      firstName: 'Super',
      lastName: 'User',
      email: this.envConfig.get('SUPER_USER_EMAIL'),
      password: this.envConfig.get('SUPER_USER_PASSWORD'),
      userType: SUPER_USER,
    });
  }

  /**
   * Remove super user
   * @return {User}
   */
  async down() {
    // Check if env. variables has been defined
    if(! this.envConfig.has('SUPER_USER_EMAIL')) {
      throw new Error('SUPER_USER_EMAIL config. variable need to be defined.');
    }
    if(! this.envConfig.has('SUPER_USER_PASSWORD')) {
      throw new Error('SUPER_USER_PASSWORD config. variable need to be defined.');
    }

    // Check if super user already seeded
    return this.userModel.remove({
      email: this.envConfig.get('SUPER_USER_EMAIL'),
    }).exec();
  }
}

IoC.singleton('superUserSeeder', [
  'userRepository',
  'userModel',
  'envConfig',
], SuperUserSeeder);
