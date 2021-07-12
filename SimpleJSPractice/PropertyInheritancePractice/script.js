const animal = {
  jumps: null,
};

const rabbit = {
  __proto__: animal,
  jumps: true,
};

// print true
console.log(rabbit.jumps);

delete rabbit.jumps;
// print null
console.log(rabbit.jumps);

delete animal.jumps;
// undefined
console.log(rabbit.jumps);

const head = {
  glasses: 1,
};

const table = {
  pen: 3,
  __proto__: head,
};

const bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

const pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);

// head.glasses faster than pockets.glasses
// let start = Date.now();
// for (let index = 0; index < 100000; index++) {
//   console.log(pockets.glasses);
// }
// let end = Date.now();
// console.log(`pocket.glasses: ${end - start}`);

// start = Date.now();
// for (let index = 0; index < 100000; index++) {
//   console.log(head.glasses);
// }
// end = Date.now();
// console.log(`head.glasses: ${end - start}`);

const animal1 = {
  eat() {
    this.full = true;
  },
};

const rabbit1 = {
  __proto__: animal1,
};

rabbit1.eat();
console.log(rabbit1);
console.log(animal1);

const hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  },
};

const speedy = {
  stomach: [],
  __proto__: hamster,
};

const lazy = {
  stomach: [],
  __proto__: hamster,
};

speedy.eat('apple');
speedy.eat('pear');
console.log(speedy.stomach);
console.log(lazy.stomach);
