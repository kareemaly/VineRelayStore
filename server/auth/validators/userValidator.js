import IoC from 'AppIoC';
import validate from 'mongoose-validator';

class UserValidator {
  email() {
    return validate({
      validator: 'isEmail',
      message: `Incorrect email format`,
    });
  }
}

IoC.singleton('userValidator', [
], UserValidator);

