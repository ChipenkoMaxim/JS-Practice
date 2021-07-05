function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, salary) => (sum + salary), 0);
}

const salariesObj = {
  John: 100,
  Pete: 300,
  Marry: 250,
};

console.log(sumSalaries(salariesObj));

function count(obj) {
  return Object.keys(obj).length;
}

const user = {
  name: 'Jogn',
  age: 30,
};

console.log(count(user));
