import IoC from 'AppIoC';
import ForbiddenError from 'server/errors/ForbiddenError';
import UnauthorizedError from 'server/errors/UnauthorizedError';

/**
 * Facade class to login and register
 */
export class TokenAuthManager {
  constructor(userRepository, tokenGuard) {
    this.userRepository = userRepository;
    this.tokenGuard = tokenGuard;
  }

  /**
   * Login user
   * @param  {User} currentViewer
   * @param  {string} email
   * @param  {string} password
   * @return {string} token
   */
  async login(currentViewer, email, password) {
    // Get viewer by email
    const viewer = await this.userRepository.getViewer(email, password);
    if(viewer.isGuest()) {
      throw new UnauthorizedError("Entered credentials are incorrect.");
    }
    // Consruct token from user
    const token = await this.tokenGuard.constructToken(viewer);
    // Return viewer and token
    return {
      viewer,
      token,
    };
  }
}

IoC.singleton('tokenAuthManager', [
  'userRepository',
  'tokenGuard',
], TokenAuthManager);
