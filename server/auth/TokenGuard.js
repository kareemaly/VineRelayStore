import IoC from 'AppIoC';

export default class TokenGuard {

  constructor(userRepository, jwtEncoderDecoder, superUser) {
    this.userRepository = userRepository;
    this.jwtEncoderDecoder = jwtEncoderDecoder;
    this.superUser = superUser;
  }

  /**
   * Get viewer from token
   * @param  {string} token
   * @return {User}
   */
  async getViewer(token) {
    const viewerId = await this.getViewerId(token);
    if(viewerId) {
      return this.userRepository.findById(this.superUser, viewerId);
    }
  }

  /**
   * Get viewer id from token
   * @param  {string} token
   * @return {string}
   */
  async getViewerId(token) {
    if(! token) {
      return;
    }
    // Decode token
    const decoded = await this.jwtEncoderDecoder.decode(token);
    // Get viewerId from decoded token object
    if(decoded) {
      return decoded.viewerId;
    }
  }

  /**
   * Construct token from viewer
   * @param  {User} viewer
   * @return {string}
   */
  async constructToken(viewer) {
    if(!viewer || !viewer._id) {
      return;
    }
    // Create token from viewer id
    return this.jwtEncoderDecoder.encode({
      viewerId: viewer._id,
    })
  }
}

IoC.singleton('tokenGuard', [
  'userRepository',
  'jwtEncoderDecoder',
  'superUser',
], TokenGuard);
