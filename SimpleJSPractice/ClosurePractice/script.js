// 'use strict';

function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
const counter2 = makeCounter();

console.log(counter());// 1
console.log(counter());// 2

console.log(counter2());// 1
console.log(counter2());// 2

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

console.log('New Counter');
const counter3 = new Counter();

console.log(counter3.up());// 1
console.log(counter3.up());// 2
console.log(counter3.down());// 1

const phrase = 'Hello';
if (true) {
  const user = 'John';

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();// Error if use strict, else print Hello, John

function sum(a) {
  return function(b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

function inBetween(left, right) {
  return function(elem) {
    // x>= left && x <= right
    if (elem < left || elem > right) {
      return false;
    }

    return true;
  };
}

function inArray(arr) {
  return function(elem) {
    return arr.includes(elem);
  };
}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

function byField(prop) {
  // return (a, b) => (a[prop] > b[prop] ? 1 : -1);
  return function(a, b) {
    if (a[prop] > b[prop]) { return 1; }
    if (a[prop] === b[prop]) { return 0; }
    return -1;
  };
}

const users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

console.log('Initial Arr');
console.log(users);

console.log('Sort ByName');
users.sort(byField('name'));
console.log(users);

console.log('Sort ByAge');
users.sort(byField('age'));
console.log(users);

function makeArmy() {
  const shooters = [];

  let i = 0;
  while (i < 10) {
    const number = i;
    const shooter = function() {
      console.log(number);
    };
    shooters.push(shooter);
    i += 1;
  }

  return shooters;
}

const army = makeArmy();
console.log(army[0]());
console.log(army[5]());
