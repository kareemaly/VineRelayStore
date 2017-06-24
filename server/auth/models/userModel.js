import IoC from 'AppIoC';
import Q from 'q';
import { Schema } from 'mongoose';
import passwordHash from 'password-hash-and-salt';
import ValidationError from 'server/errors/ValidationError';
import uniqueValidator from 'mongoose-unique-validator';
import { checkEqualIds } from 'server/utils/mongo';
import {
  GUEST_USER,
  ADMIN_USER,
  SUPER_USER,
} from 'server/auth/constants/userTypes';

export const userModel = (mongoose, userValidator) => {
  const supportedUserTypes = [
    GUEST_USER,
    ADMIN_USER,
    SUPER_USER,
  ];

  /**
   * User schema definition.
   * @type {Schema}
   */
  const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, validate: userValidator.email(), unique: true},
    // This attribute is the hashed password (the actual password is never saved)
    password: {type: String, required: true},
    // Used to separate different types of users and give access to certain APIs
    userType: {type: String, enum: supportedUserTypes, required: true},
  });

  /**
   * Check if this user is of type.
   * @param  {string} type
   * @return {boolean}
   */
  userSchema.method('checkUserType', function(type) {
    return this.userType === type;
  });

  /**
   * Check if user is guest.
   * @return {boolean}
   */
  userSchema.method('isGuest', function() {
    return this.checkUserType(GUEST_USER);
  });

  /**
   * Check if user is admin.
   * Admin users have access to CMS actions.
   * @return {boolean}
   */
  userSchema.method('isAdmin', function() {
    return this.checkUserType(ADMIN_USER) || this.isSuper();
  });

  /**
   * Check if user is super.
   * Super users have full access to our APIs.
   * Beside having access to CMS actions, he has access to some database operations like seeding.
   * @return {boolean}
   */
  userSchema.method('isSuper', function() {
    return this.checkUserType(SUPER_USER);
  });

  /**
   * Getter for user email.
   * @return  {string}
   */
  userSchema.method('getEmail', function() {
    return this.email;
  });

  /**
   * Getter for user first name.
   * @return  {string}
   */
  userSchema.method('getFirstName', function() {
    return this.firstName;
  });

  /**
   * Getter for user last name.
   * @return  {string}
   */
  userSchema.method('getLastName', function() {
    return this.lastName;
  });

  /**
   * Getter for user display name.
   * @return  {string}
   */
  userSchema.method('getDisplayName', function() {
    return `${this.firstName} ${this.lastName}`;
  });

  /**
   * Check if the same user
   * @param {ObjectId|UserModel} user
   * @return {boolean} true if the same user
   */
  userSchema.method('same', function(user) {
    return checkEqualIds(user, this._id);
  });

  /**
   * Hash user password
   * @param {string} password user input password
   */
  userSchema.method('hashPassword', async function(password) {
    this.password = await Q.ninvoke(passwordHash(password), 'hash');
  });

  /**
   * Check if password is correct
   * @param {string} password
   * @return {boolean} whether password is correct or not
   */
  userSchema.method('verifyPassword', async function(password) {
    if(! password) {
      return false;
    }

    return Q.ninvoke(passwordHash(password), 'verifyAgainst', this.password);
  });

  /**
   * Pre save middleware
   * - Hash password if it has been modified
   * @param {Function} next
   */
  userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
      await this.hashPassword(this.password);
    }

    next();
  });

  userSchema.plugin(uniqueValidator);

  return mongoose.model('User', userSchema);
}

IoC.callable('userModel', [
  'connection',
  'userValidator',
], userModel);
