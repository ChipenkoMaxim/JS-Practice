function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  counter.set = value => counter.count = value;
  counter.decrease = () => counter.count--;

  return counter;
}
const count = makeCounter();

count();
count();
count();
console.log(count.count);

count.set(100);
console.log(count.count);
count.decrease();
count.decrease();
count.decrease();
console.log(count.count);

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

// Work in browser not in Node.js
console.log( sum(1)(2)); // 3
console.log( sum(5)(-1)(2) ); // 6
console.log( sum(6)(-1)(-2)(-3) ); // 0
console.log( sum(0)(1)(2)(3)(4)(5) ); // 15