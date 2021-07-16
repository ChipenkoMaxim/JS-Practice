class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

const err = new FormatError('Format error');

console.log(err.message);
console.log(err.name);
console.log(err.stack);

console.log(err instanceof FormatError);// true err.__proto__ === FormatError.prototype
console.log(err instanceof SyntaxError);// true err.__proto__.__proto__ === SyntaxError.prototype
