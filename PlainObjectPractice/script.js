const user = {
  name: 'Jogn',
  surname: 'Smith',
};

user.name = 'Pete';
delete user.name;
// console.log(user);

function isEmpty(currentObject) {
  for (let property in currentObject) {
      return false;
  }

  return true;
}

let schedule = {};

console.log(isEmpty(schedule));

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule));

const user1 = {
  name: 'John',
};

user.name = 'Pete';
console.log(user.name);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function calcSummarySalary(salaries) {
  let sum = 0;
  for (let salary in salaries) {
    sum += salaries[salary];
  }
  return sum;
};

// delete salaries.John;
// delete salaries.Ann;
// delete salaries.Pete;

console.log(calcSummarySalary(salaries));

const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(menuObject) {
  const multiplyer = 2;
  for (const property in menuObject) {
    if ((typeof menuObject[property]) === 'number') {
      menuObject[property] *= multiplyer;
    }
  }
}

console.log('Before:');
console.log(menu);
multiplyNumeric(menu);
console.log('After:');
console.log(menu);
