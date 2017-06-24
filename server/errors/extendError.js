const getMongooseValidationErrors = mongooseErrors => {
  let errors = [];
  for(let mongooseErrorKey in mongooseErrors) {
    errors.push({
      key: mongooseErrorKey,
      value: mongooseErrors[mongooseErrorKey].message
    });
  }
  return errors;
}


if(!Error.prototype.toObject) {
  Error.prototype.toObject = function() {
    /**
     * e.g.
     * ```
     * {
     *   name: 'ValidationError',
     *   message: 'A validation error has occured while registering the user.',
     *   validationMessages: [
     *     {
     *       key: 'password',
     *       value: 'Password is too short',
     *     },
     *   ],
     * }
     * ```
     */
    if(this.name === 'ValidationError') {
      return {
        name: "ValidationError",
        message: this.message,
        validationMessages: getMongooseValidationErrors(this.errors),
        stack: this.stack,
      };
    }

    return {
      message: this.message,
      name: this.name,
      stack: this.stack,
    };
  };
}
