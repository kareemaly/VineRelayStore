import IoC from 'AppIoC';
import ValidationError from  'server/errors/ValidationError';
import ForbiddenError from  'server/errors/ForbiddenError';
import UnauthorizedError from  'server/errors/UnauthorizedError';
import { SUPER_USER } from 'server/auth/constants/userTypes';

export default class UserRepository {
  constructor(userModel, envConfig) {
    this.userModel = userModel;
    this.envConfig = envConfig;
  }

  /**
   * Get super user
   * @return {User}
   */
  async getSuperUser() {
    return this.userModel.findOne({
      email: this.envConfig.get('SUPER_USER_EMAIL'),
    }).exec();
  }

  /**
   * Use this method to query users
   * @param  {User|null} viewer
   * @param  {object} inputs
   * @return {User[]}
   * @throws {ForbiddenError} If not an admin
   */
  async query(viewer, inputs) {
    // Guests cant query users
    if(viewer.isGuest()) {
      throw new UnauthorizedError(`You must login to make this request`);
    }
    // Only admins can query users
    if(! viewer.isAdmin()) {
      throw new ForbiddenError(`You dont have access to query users`);
    }
    // Create a new query
    const query = this.userModel.find();
    // Search users by email
    if(inputs.email) {
      query.where('email', inputs.email);
    }
    // return query executed promise
    return query.exec();
  }

  /**
   * Find user by id
   * @param  {User|null} viewer
   * @param  {ObjectId} id
   * @return {User|null}
   * @throws {ForbiddenError} If not an admin
   */
  async findById(viewer, id) {
    // Guests cant query users
    if(viewer.isGuest()) {
      throw new UnauthorizedError(`You must login to make this request`);
    }
    // Only admins can query users
    if(! viewer.isAdmin()) {
      throw new ForbiddenError(`You dont have access to query users`);
    }
    // Find user by id
    return this.userModel.findById(id).exec();
  }

  /**
   * Get viewer by email and password
   * @param  {string} email
   * @param  {string} password
   * @return {User|null}
   * @throws {ValidationError} If invalid credentials
   */
  async getViewer(email, password) {
    // Get user by email
    const user = await this.userModel.findOne({ email }).exec();
    // Throw error if he doesnt exist
    if(! user) {
      throw new ValidationError({ email: "No user with this email" });
    }
    // Check the user password
    const verified = await user.verifyPassword(password);
    // Throw error if password is incorrect
    if(! verified) {
      throw new ValidationError({ password: "Password is incorrect" });
    }
    return user;
  }

  /**
   * Create a new user
   * @param  {User|null} viewer
   * @param  {Object} attributes
   * @return {User}
   */
  async create(viewer, attributes) {
    // Guests cant create users
    if(viewer.isGuest()) {
      throw new UnauthorizedError(`You must login to make this request`);
    }
    // Only admins can create users
    if(! viewer.isAdmin()) {
      throw new ForbiddenError(`You dont have access to query users`);
    }
    // Even admins cant create super users
    // Assuming that super users have every control over the database, it's
    // safe to disable the creation of super users using our APIs.
    if(attributes.userType === SUPER_USER) {
      throw new ForbiddenError("Super users can only be created manually.");
    }

    // Create the user
    return this.userModel.create(attributes);
  }

  /**
   * Remove user by id
   * @param  {User|null} viewer
   * @param  {ObjectId} id
   */
  async remove(viewer, id) {
    // Guests cant remove users
    if(viewer.isGuest()) {
      throw new UnauthorizedError(`You must login to make this request`);
    }
    // Only admins can remove users
    if(! viewer.isAdmin()) {
      throw new ForbiddenError(`You dont have access to query users`);
    }
    return this.userModel.remove({ _id: id }).exec();
  }
}

IoC.singleton('userRepository', [
  'userModel',
  'envConfig',
], UserRepository);
