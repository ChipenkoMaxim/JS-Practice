const browser = 'FireFox';
if (browser === 'Edge') {
  console.log('You\'ve got the Edge');
} else if (browser === 'Chrome'
  || browser === 'FireFox'
  || browser === 'Safari'
  || browser === 'Opera') {
  console.log('Okay we support these browsers too');
} else {
  console.log('We hope that this page looks ok!');
}

const number = 2;
switch (number) {
  case 0:
    console.log('You typed zero');
    break;
  case 1:
    console.log('You typed one');
    break;
  case 2:
  case 3:
    console.log('You typed two or three');
    break;
  default:
  // kek
}
