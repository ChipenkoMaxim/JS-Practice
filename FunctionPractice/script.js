const min = (firstNumber, secondNumber) => {
  const minNumber = (firstNumber < secondNumber) ? firstNumber : secondNumber;
  return minNumber;
};

const firstInvoke = min(2, 5);
const secondInvoke = min(3, -1);
const thirdInvoke = min(1, 1);
console.log(`${firstInvoke} ${secondInvoke} ${thirdInvoke}`);

const pow = (base, power) => {
  if (power < 1) {
    return undefined;
  }
  let powerResult = 1;
  for (let i = 0; i < power; i += 1) {
    powerResult *= base;
  }
  return powerResult;
};

const firstPowInvoke = pow(3, 2);
const secondPowInvoke = pow(3, 3);
const thirdPowInvoke = pow(1, 100);
console.log(`${firstPowInvoke} ${secondPowInvoke} ${thirdPowInvoke}`);
