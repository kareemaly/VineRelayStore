import ForbiddenError from './ForbiddenError';
import ModelNotFoundError from './ModelNotFoundError';
import UnauthorizedError from './UnauthorizedError';
import ValidationError from './ValidationError';
import IoC from 'AppIoC';

export default class ErrorHandler {
  format(error) {
    if(error && error.toObject) {
      return error.toObject();
    }
    return error;
  }

  getStatusCode(error) {
    if(error instanceof ForbiddenError) {
      return 401;
    }
    if(error instanceof ModelNotFoundError) {
      return 404;
    }
    if(error instanceof UnauthorizedError) {
      return 401;
    }
    if(error instanceof ValidationError) {
      return 400;
    }
    return 500;
  }
}

IoC.singleton('errorHandler', [], ErrorHandler);
