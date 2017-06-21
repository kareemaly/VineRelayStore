export default function UnknownError(messages) {
  this.name = 'UnknownError';
  this.message = "A validation error has occured";
  this.stack = (new Error()).stack;

  this.toObject = () => ({
    message: this.message,
    name: this.name,
    stack: this.stack,
  });
}

UnknownError.prototype = Object.create(Error.prototype);
UnknownError.prototype.constructor = UnknownError;
