const firstNumber = +10;
const secondNumber = +20;

console.log(firstNumber + secondNumber);

console.log(1.35.toFixed(1));

console.log(Math.round(6.35 * 10) / 10);

function readNumber() {
  return +'100';
}

const randomNumber = readNumber();
console.log(randomNumber);

function random(min, max) {
  return (max - min) * Math.random() + min;
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

// Bad implimentation
function randomInteger(min, max) {
  return Math.round((max - min) * Math.random() + min);
}

// First Good Implementation
function randomIntegerFirstGood(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

// Second Good Implementation
function randomIntegerSecondGood(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log('Bad implementation');
const firstMass = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < 1000; i += 1) {
  firstMass[randomInteger(1, 5)] += 1;
}
console.log(firstMass);
console.log();

console.log('First Good implementation throught round and 0.5');
const secondMass = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < 1000; i += 1) {
  secondMass[randomIntegerFirstGood(1, 5)] += 1;
}
console.log(secondMass);
console.log();

console.log('Second Good implementation throught floor');
const thirdMass = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < 1000; i += 1) {
  thirdMass[randomIntegerSecondGood(1, 5)] += 1;
}
console.log(thirdMass);
console.log();
