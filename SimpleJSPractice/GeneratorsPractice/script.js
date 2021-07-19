// Straight solution
function* pseudoRandom(seed) {
  let value = seed;

  while (true) {
    value = (value * 16807) % 2147483647;
    yield value;
  }
}

const generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073

// Alter solution
function pseudoRandom1(seed) {
  let value = seed;

  return function () {
    value = (value * 16807) % 2147483647;
    return value;
  };
}

const generator1 = pseudoRandom1(1);
console.log(generator1()); // 16807
console.log(generator1()); // 282475249
console.log(generator1()); // 1622650073
