const user = {
  name: 'Vasyliy Ivanovich',
  age: 35,
};

const userJson = JSON.stringify(user);
console.log(userJson);
const newUser = JSON.parse(userJson);
console.log(newUser);

const room = {
  number: 23,
};

const meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, (key, value) => (
  (key !== '' && value === meetup) ? undefined : value)));
