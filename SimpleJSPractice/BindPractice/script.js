function f1() {
  console.log(this);
}

const user1 = {
  g: f1.bind(null),
};

// print [object Window]
// expected null
user1.g();

function f2() {
  console.log(this.name);
}

f2 = f2.bind({ name: 'Vasya' }).bind({ name: 'Petya' });
// print 'Vasya';
f2();

function sayHi() {
  console.log(this.name);
}

sayHi.test = 5;

const bound = sayHi.bind({
  name: 'Vasya',
});

// bound dont't has property test
// print undefined
console.log(bound.test);

function askPassword(ok, fail) {
  const password = 'pass';
  if (password === 'pass') {
    ok();
  } else {
    fail();
  }
}

const user2 = {
  name: 'Vasya',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to login`);
  },
};

user2.loginOk = user2.loginOk.bind(user2);
user2.loginFail = user2.loginFail.bind(user2);
// alter invoke = askPassword(user2.loginOk.bind(user2), user2.loginFail.bind(user2));
// another alter inv function wrapper = askPassword(() => user.liginOk(), () => user.loginFail());
askPassword(user2.loginOk, user2.loginFail);

function askPassword1(ok, fail) {
  const password = 'pass';
  if (password === 'pass') {
    ok();
  } else {
    fail();
  }
}

const user3 = {
  name: 'John',

  login(result) {
    console.log(this.name + (result ? ' logged in'
      : ' failed to login in'));
  },
};

// alter invoke function wrapper = askPassword1(() => user3.login(true), () => user3.login(false));
askPassword1(user3.login.bind(user3, true), user3.login.bind(user3, false));
