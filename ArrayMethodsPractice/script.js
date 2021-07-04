// My solution
function camelize(str) {
  const wordArr = str.split('-');

  for (let i = 1; i < wordArr.length; i += 1) {
    wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].slice(1);
  }

  const camelizeString = wordArr.join('');

  return camelizeString;
}

// Good Solution
function camelize1(str) {
  return str
    .split('-')
    .map(
      (word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)),
    )
    .join('');
}

console.log(camelize('background-color') === 'backgroundColor');
console.log(camelize('list-style-image') === 'listStyleImage');
console.log(camelize('-webkit-transition') === 'WebkitTransition');

function filterRange(arr, a, b) {
  return arr
    .filter(
      (number) => number >= a && number <= b,
    );
}

const rangeArr = [5, 3, 8, 1];
const filtered = filterRange(rangeArr, 1, 4);

console.log(filtered);
console.log(rangeArr);

function filterRangeInPlace(arr, a, b) {
  arr.filter(
    (number, index) => (number >= a && number <= b
      ? number
      : arr.splice(index, 1)),
  );
}

const rangeArr1 = [5, 3, 8, 1];
filterRangeInPlace(rangeArr1, 1, 4);
console.log(rangeArr1);

function backwardSort(arr) {
  arr.sort((a, b) => b - a);
}

const sortArr = [5, 2, 1, -10, 8];
backwardSort(sortArr);
console.log(sortArr);

function copySorted(arr) {
  return arr.slice().sort();
}

const copySortArr = ['HTML', 'JavaScript', 'CSS'];
const sorted = copySorted(copySortArr);
console.log(sorted);
console.log(copySortArr);

// My Solution
function Calculator() {
  const operators = ['+', '-'];
  const functions = [(a, b) => a + b, (a, b) => a - b];
  const isOperationExist = (operation) => operators.includes(operation);

  this.calculate = function calculate(str) {
    const splitedArr = str.split(' ');
    const operator = splitedArr[1];
    const firstOperand = +splitedArr[0];
    const secondOperand = +splitedArr[2];
    if (isOperationExist(operator)) {
      const indexOfOperation = operators.findIndex((item) => item === operator);
      return functions[indexOfOperation](firstOperand, secondOperand);
    }

    return undefined;
  };

  this.addMethod = function addMethod(name, func) {
    operators.push(name);
    functions.push(func);
  };
}

// Better  Solution
function Calculator1() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function calculate(str) {
    const split = str.split(' ');
    const a = +split[0];
    const op = split[1];
    const b = +split[2];

    if (!this.methods[op] || Number.isNaN(a) || Number.isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function addMethod(name, func) {
    this.methods[name] = func;
  };
}

const calc = new Calculator();

console.log(calc.calculate('2 + 5'));
console.log(calc.calculate('5 - 2'));

calc.addMethod('*', (a, b) => a * b);
calc.addMethod('/', (a, b) => a / b);
calc.addMethod('**', (a, b) => a ** b);

console.log(calc.calculate('5 * 5'));
console.log(calc.calculate('0 * 0'));
console.log(calc.calculate('-1 * 5'));
console.log(calc.calculate('10 / -5'));
console.log(calc.calculate('2 ** 5'));

const vasya = { name: 'Vasya', age: 25 };
const petya = { name: 'Petya', age: 30 };
const masha = { name: 'Masha', age: 29 };

const users = [vasya, petya, masha];
const names = users.map((person) => person.name);
console.log(names);

const vasya1 = { name: 'Vasya', surname: 'Pupkin', id: 1 };
const petya1 = { name: 'Petya', surname: 'Ivanov', id: 2 };
const masha1 = { name: 'Masha', surname: 'Petrova', id: 3 };

const users1 = [vasya1, petya1, masha1];
const usersMapped = users1.map((person) => ({
  fullName: `${person.name} ${person.surname}`,
  id: person.id,
}));

console.log(usersMapped);
console.log(usersMapped[0].fullName);
console.log(usersMapped[0].id);

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

sortByAge(users);
console.log(users);

const shuffleArr = [1, 2, 3];

// My Shuffle Solution
function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function shuffle(arr) {
  const min = 0;
  let max = arr.length - 1;
  const arrCopy = arr.slice();

  for (let i = 0; i < arr.length; i += 1) {
    const randomIndex = randomInteger(min, max);
    arr.splice(i, 1, arrCopy[randomIndex]);
    arrCopy.splice(randomIndex, 1);
    max -= 1;
  }
}

// Better Shuffle Solution (Fisher-Yets), Faster than mine solution
function shuffle1(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // ???
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle1(shuffleArr);
console.log(shuffleArr);

function getAverageAge(persons) {
  return persons.reduce((sum, person) => sum + person.age, 0) / persons.length;
}

console.log(getAverageAge(users));

function unique(arr) {
  const newArr = arr.reduce((newStr, curr) => (newStr.includes(curr)
    ? `${newStr}`
    : `${newStr + curr} `), '').split(' ');
  newArr.splice(-1, 1);
  return newArr;
}

const strings = ['кришна', 'кришна', 'харе', 'харе',
  'харе', 'харе', 'кришна', 'кришна', ':-O',
];

console.log(unique(strings));
