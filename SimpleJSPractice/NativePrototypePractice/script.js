function f() {
  console.log('Hello!');
}

Function.prototype.defer = function defer(ms) {
  setTimeout(this, ms);
};

f.defer(1000);

function f1(a, b) {
  console.log(a + b);
}

// My Solution
Function.prototype.defer1 = function defer(ms) {
  function wrapper(...rest) {
    setTimeout(this, ms, ...rest);
  }
  const shell = wrapper.bind(this);
  return shell;
};

// Another Solution
// Function.prototype.defer1 = function defer(ms) {
//   const f = this;
//   return function (...rest) {
//     setTimeout(() => f.apply(this, rest), ms);
//   };
// };

f1.defer1(1000)(1, 2);
