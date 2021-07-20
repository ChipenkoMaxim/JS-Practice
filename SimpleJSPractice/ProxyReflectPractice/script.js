let user = {
  name: 'John',
};

function wrap(obj) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      }

      return new ReferenceError(`Property doesn't exitst: ${prop}`);
    },
  });
}

user = wrap(user);

console.log(user.name);
// throw Exception
// console.log(user.age);

let array = [1, 2, 3];

// My implimentation
array = new Proxy(array, {
  get(target, prop) {
    const arrCopy = Object.create(target);
    arrCopy.reverse();
    const positiveIndex = (-prop) - 1;

    if (positiveIndex in arrCopy) {
      return arrCopy[positiveIndex];
    }

    return new ReferenceError(`Index doesn't reach: ${prop}`);
  },
});

// Better implimentation
/*
array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      prop = +prop + target.length;
    }

    return Reflect.get(target, prop, receiver);
  },
});
*/
console.log(array[-1]);
console.log(array[-2]);

const handlers = Symbol('handlers');

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function observe(handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, prop, value, receiver) {
      const success = Reflect.set(target, prop, value, receiver);
      if (success) {
        target[handlers].forEach((handler) => handler(prop, value));
      }

      return success;
    },
  });
}

let user1 = {};
user1 = makeObservable(user1);

user1.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user1.name = 'John';
