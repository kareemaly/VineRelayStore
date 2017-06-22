import IoC from 'AppIoC';

export default class AuthMiddleware {
  constructor(tokenGuard, guestUser) {
    this.tokenGuard = tokenGuard;
    this.guestUser = guestUser;
  }

  /**
   * Assign viewer to the request object
   * @param {Object}   req
   * @param {Object}   res
   * @param {Function} next
   */
  async setViewer(req, res, next) {
    try {
      // Get token from header
      if (req.get('Authorization')) {
        const token = req.get('Authorization').replace('JWT ', '');
        // Get viewer from token
        req.viewer = await this.tokenGuard.getViewer(token);
      }

      // Use a mocked guest user when not logged in
      if(! req.viewer) {
        req.viewer = this.guestUser;
      }

      next();
      //
    } catch(err) {
      next(err);
    }
  }
}

IoC.singleton('authMiddleware', [
  'tokenGuard',
  'guestUser',
], AuthMiddleware);
