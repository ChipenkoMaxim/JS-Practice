if ("0") {
  console.log('Hello!');
}

const oficialJavaScriptName = 'ECMAScript';
if (oficialJavaScriptName === 'ECMAScript') {
  console.log('You\'re right!');
} else {
  console.log('Didn\'t know? It\'s \"ECMAScript!\"');
}

const randomNumber = 13;
if (randomNumber > 0) {
  console.log(1);
} else if (randomNumber < 0) {
  console.log(-1);
} else if (randomNumber === 0) {
  console.log(0);
}

const a = 10;
const b = 5;
const result = (a + b < 4) ? 'Few' : 'Lot';
console.log(result);

const login = '';
const message = (login === 'Employee') ? 'Hello'
  : (login === 'CEO') ? 'Hello'
    : (login === '') ? 'Empty Login'
      : '';
console.log(message);
