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
