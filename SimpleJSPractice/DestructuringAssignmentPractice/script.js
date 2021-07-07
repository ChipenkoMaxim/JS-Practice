const user = {
  name: 'John',
  years: 30,
};

const {
  name,
  years: age,
  isAdmin = false,
} = user;

console.log(name);
console.log(age);
console.log(isAdmin);

function topSalary(salaries) {
  let maxSalary = 0;
  let topName = null;

  // eslint-disable-next-line no-restricted-syntax
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topName = name;
    }
  }

  return topName;
}

const salariesArr = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salariesArr));
