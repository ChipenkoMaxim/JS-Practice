// eslint-disable-next-line max-classes-per-file
class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

const rabbit = new Rabbit('Rab');

console.log(Object.prototype.hasOwnProperty.call(rabbit, 'name'));

class Rabbit1 extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

const rabbit1 = new Rabbit1('Croll');
// eslint-disable-next-line no-prototype-builtins
console.log(rabbit1.hasOwnProperty('name'));
