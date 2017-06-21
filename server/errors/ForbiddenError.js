export default function ForbiddenError(message) {
  this.name = 'ForbiddenError';
  this.message = message || "You don't have permission to make this request";
  this.stack = (new Error()).stack;

  this.toObject = () => ({
    message: this.message,
    name: this.name,
    stack: this.stack,
  });
}

ForbiddenError.prototype = Object.create(Error.prototype);
ForbiddenError.prototype.constructor = ForbiddenError;
