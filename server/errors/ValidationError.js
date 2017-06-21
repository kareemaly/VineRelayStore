export default function ValidationError(messages) {
  this.name = 'ValidationError';
  this.message = "A validation error has occured";
  this.stack = (new Error()).stack;

  this.getMessages = () => {
    if(messages.constructor === Array) {
      return messages;
    }
    // If the messages was an object in this format
    // e.g. { password: "Password is incorrect" }
    // Then we have to format it to be
    // e.g. [
    //  { key: "password", value: "Password is incorrect" }
    // ]
    let arr = [];
    for(let key in messages) {
      arr.push({ key, value: messages[key] });
    }
    return arr;
  };
  this.toObject = () => ({
    message: this.message,
    name: this.name,
    validationMessages: this.getMessages(),
    stack: this.stack,
  });
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;
