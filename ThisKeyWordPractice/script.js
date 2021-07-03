const user = {
  name: 'John',
  go() {
    console.log(this.name);
  },
};

(user.go)();

let method;

const obj = {
  go: function() {console.log(this);}
};

obj.go(); // [object Object]
(obj.go)(); // [object Object]
(method = obj.go)(); // undefined
(obj.go || obj.stop)(); // undefined

function makeUser() {
  return {
    name: 'Jon',
    ref: this,
  };
}

const user1 = makeUser();

console.log(user1.ref.name);// undefined

const calculator = {
  firstNumber: 0,
  secondNumber: 0,

  read(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  },

  sum() {
    return this.firstNumber + this.secondNumber;
  },

  mul() {
    return this.firstNumber * this.secondNumber;
  },
};

calculator.read(10, 20);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());

const ladder = {
  step: 0,

  up() {
    this.step += 1;
    return this;
  },

  down() {
    this.step -= 1;
    return this;
  },

  showStep() {
    console.log(this.step);
  },
};

console.log(ladder
  .up()
  .up()
  .down()
  .showStep());
