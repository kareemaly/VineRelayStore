import IoC from 'AppIoC';

/**
 * Super user has access to everything in the app...
 */
export const superUser = (userRepository) => {
  return userRepository.getSuperUser();
}

IoC.callable('superUser', [
  'userRepository',
], superUser);
