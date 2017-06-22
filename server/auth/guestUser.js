import IoC from 'AppIoC';
import { GUEST_USER } from 'server/auth/constants/userTypes';

/**
 * Guest user.
 *
 * Mocking user model to use if not logged in to have expected behavior
 * in all our app.
 */
export const guestUser = (userModel) => {
  const guest = new userModel();
  guest.set({
    firstName: 'Guest',
    lastName: 'User',
    userType: GUEST_USER,
  });
  return guest;
}

IoC.callable('guestUser', ['userModel'], guestUser);
