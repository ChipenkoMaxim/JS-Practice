const name = 'Джон';
const admin = name;
console.log(admin);

const planetName = 'Earth';
const currentUserName = 'Maxim';

const calcAge = (birthDayString) => {
  const nowaday = new Date();
  const age = nowaday.getFullYear() - (birthDayString.slice(-4));
  return age;
};

const BIRTHDAY = '18.05.1999';
const currentAge = calcAge(BIRTHDAY);
console.log(currentAge);
