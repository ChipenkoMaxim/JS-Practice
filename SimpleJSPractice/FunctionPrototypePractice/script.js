function Rabbit() {}

Rabbit.prototype = {
  eats: true,
};

const rabbit = new Rabbit();

// print false
// Rabbit.prototype.eats = false;
// console.log(rabbit.eats);

// print true
// Rabbit.prototype = {};
// console.log(rabbit.eats);

// print true, delete own property eats
// delete rabbit.eats;
// console.log(rabbit.eats);

// print undefined
delete Rabbit.prototype.eats;
console.log(rabbit.eats);

// Constructor prototype has constructor property
function TestConstruct() {
  this.name = 'Kekus';
}

const obj = new TestConstruct();
const obj1 = new obj.constructor();
console.log(obj1.name);

function TestConstruct1() {
  this.name = 'Kekus1';
}
TestConstruct1.prototype = {};

const obj2 = new TestConstruct1();
// Object.prototype not TestConstruct1.prototype
const obj3 = new obj2.constructor();
// true
console.log(typeof obj3 === 'object');
// [Function: Object]
console.log(obj2.constructor);
// {}
console.log(obj3);
// undefined
console.log(obj3.name);
