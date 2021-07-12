const dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

// My Solution
// Object.defineProperty(dictionary, 'toString', {
//   value() {
//     return Object.keys(this).join();
//   },
// });

for (const key in dictionary) {
  console.log(key);
}

console.log(dictionary);

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

const rabbit = new Rabbit('Rabbit');

// print 'Rabbit'
rabbit.sayHi();
// print undefined
Rabbit.prototype.sayHi();
// print undefined Object.getPrototypeOf(rabbit) = Rabbit.prototype
Object.getPrototypeOf(rabbit).sayHi();
// print undefined rabbit.__proto__ = Rabbit.prototype
rabbit.__proto__.sayHi();
