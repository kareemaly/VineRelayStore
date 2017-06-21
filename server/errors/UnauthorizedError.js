export default function UnauthorizedError(message) {
  this.name = 'UnauthorizedError';
  this.message = message || "You must login to make this request";
  this.stack = (new Error()).stack;

  this.toObject = () => ({
    message: this.message,
    name: this.name,
    stack: this.stack,
  });
}

UnauthorizedError.prototype = Object.create(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;
