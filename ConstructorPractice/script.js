const obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

const a = new A();
const b = new B();

// console.log(a);
// console.log(b);
console.log(a === b);

function Calculator() {
  let firstNumber = 0; // this.firstNumber = 0
  let secondNumber = 0;// this.secondNumber = 0

  this.read = function read(firstNumber1, secondNumber1) {
    firstNumber = firstNumber1;// this.firstNumber = firstNumber1
    secondNumber = secondNumber1;// this.secondNumber = secondNumber1
  };

  this.sum = function sum() {
    return firstNumber + secondNumber;// return this.firstNumber + this.secondNumber
  };

  this.mul = function mul() {
    return firstNumber * secondNumber;// return this.firstNumber * this.secondNumber
  };
}

const calculator = new Calculator();
calculator.read(10, 20);

console.log(`Sum = ${calculator.sum()}`);
console.log(`Mul = ${calculator.mul()}`);
console.log(calculator);

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function read(numb) {
    this.value += numb;
  };
}

const accumulator = new Accumulator(1);

accumulator.read(4);
accumulator.read(10);

console.log(accumulator.value);
