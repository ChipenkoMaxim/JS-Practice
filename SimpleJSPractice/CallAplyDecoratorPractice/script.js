function work(a, b) {
  console.log(a + b);
}

function spy(func) {
  function decorator(...rest) {
    decorator.calls.push(rest);
    const result = func.apply(this, rest);
    return result;
  }
  decorator.calls = [];

  return decorator;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  console.log('call:' + args.join());
}

function f(x) {
  console.log(x);
}

function delay(func, ms) {
  function decorator(...rest) {
    let result = 0;
    setTimeout(() => {
      result = func.apply(this, rest);
    }, ms);

    return result;
  }

  return decorator;
}

const f1000 = delay(f, 1000);
const f1500 = delay(f, 1500);

f1000('test');
f1500('test');

function printK() {
  console.log('k');
}

function debounce(func, ms) {
  function decorator(...rest) {
    if (decorator.currentTimer === 0) {
      decorator.currentTimer = setTimeout(() => {
        func.apply(this, rest);
        decorator.currentTimer = 0;
      }, ms);
    }
  }
  decorator.currentTimer = 0;

  return decorator;
}

let df = debounce(console.log, 1000);

// df(1);
// df(2);

// setTimeout(() => df(3), 100);
// setTimeout(() => df(4), 1100);
// setTimeout(() => df(5), 1500);

function ff(a) {
  console.log(a);
}

// Better Solution
function throttle(func, ms) {
  let isIgnore = false;
  let saveThis = null;
  let saveArgs = [];

  function decorator(...rest) {
    if (isIgnore) {
      saveThis = this;
      saveArgs = rest;
      return;
    }

    func.apply(this, rest);

    isIgnore = true;

    // eslint-disable-next-line no-return-assign
    setTimeout(() => {
      isIgnore = false;
      if (saveArgs) {
        decorator.apply(saveThis, saveArgs);
        saveArgs = null;
        saveThis = null;
      }
    }, ms);
  }

  return decorator;
}

const f10001 = throttle(ff, 1000);

f10001(1);
f10001(2);
f10001(3);
setTimeout(() => f10001(4), 1000);
