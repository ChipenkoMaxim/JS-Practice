const age = 91;
if (age >= 14 && age <= 90) {
  console.log('age between 14 and 90');
}

if (!(age >= 14 && age <= 90)) {
  console.log('age don\'t between 14 and 90');
}

if (age < 14 || age > 90) {
  console.log('age don\'t between 14 and 90');
}

const username = 'Admin';
const password = '...';

if (username === 'Admin') {
  if (password === 'Admin') {
    console.log('Hello!');
  } else if (password === '') {
    console.log('Denied');
  } else {
    console.log('Wrong Password!');
  }
} else if (username === '') {
  console.log('Denied');
} else {
  console.log('I don\'t know who are you');
}
