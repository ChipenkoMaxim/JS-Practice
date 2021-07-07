const fruits = ['Apples', 'Pear', 'Orange'];

const shoppingCart = fruits;
shoppingCart.push('Banana');

console.log(fruits.length);

const styles = ['Jazz', 'Bluses'];// 1
console.log(styles);

styles.push('Rock\'n\'Roll');// 2
console.log(styles);

const middleElement = Math.floor(styles.length / 2);// 3
styles[middleElement] = 'Classic';
console.log(styles);

console.log(styles.shift());// 4
console.log(styles);

styles.unshift('Rap', 'Reggy');// 5
console.log(styles);

const array = ['a', 'b'];

array.push(function someFunc() {
  console.log(this);
});

console.log(array[2]());

function sumInput() {
  const sum = [];
  sum.push(10, 20, 30, 2, 3);
  let sumResult = 0;
  for (const item of sum) {
    sumResult += item;
  }

  return sumResult;
}

console.log(sumInput());
//My try to answer problem
///////////////////////////////////////////////////////////////////////////////
function sumArray(arr) {
  let sumResult = 0;
  for (const item of arr) {
    sumResult += item;
  }

  return sumResult;
}

function makeShiftArr(arr) {
  const shiftArr = [];
  Object.assign(shiftArr, arr);
  shiftArr.shift();
  return shiftArr;
}

function makePopArr(arr) {
  const popArr = [];
  Object.assign(popArr, arr);
  popArr.pop();
  return popArr;
}

function findMaxSubSum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const shiftArr = makeShiftArr(arr);
  const popArr = makePopArr(arr);

  const sumShiftArr = sumArray(shiftArr);
  const sumPopArr = sumArray(popArr);

  let nextShiftSum;
  let nextPopSum;

  if (sumShiftArr === sumPopArr) {
    nextShiftSum = findMaxSubSum(shiftArr);
    nextPopSum = findMaxSubSum(popArr);
    return nextShiftSum > nextPopSum ? nextShiftSum : nextPopSum;
  }

  if (sumShiftArr > sumPopArr) {
    nextShiftSum = findMaxSubSum(shiftArr);
    return sumShiftArr > nextShiftSum ? sumShiftArr : nextShiftSum;
  }

  nextPopSum = findMaxSubSum(popArr);
  return sumPopArr > nextPopSum ? sumPopArr : nextPopSum;
}

function getMaxSubSum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const maxSubSum = findMaxSubSum(arr);
  if (maxSubSum <= 0) {
    return 0;
  }

  const arrSum = sumArray(arr);
  if (maxSubSum < arrSum) {
    return arrSum;
  }

  return maxSubSum;
}
///////////////////////////////////////////////////////////////////////////

///Fastest Implementation ////
///////////////////////////////////////////////////////////////////////////
function getMaxSubSum1(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}
///////////////////////////////////////////////////////////////////////////
console.log(getMaxSubSum1([-1, 2, 3, -9]));
console.log(getMaxSubSum1([2, -1, 2, 3, -9]));
console.log(getMaxSubSum1([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum1([-2, -1, 1, 2]));
console.log(getMaxSubSum1([100, -9, 2, -3, 5]));
console.log(getMaxSubSum1([1, 2, 3]));
console.log(getMaxSubSum1([]));
console.log(getMaxSubSum1([-1]));
console.log(getMaxSubSum1([2, -8, 5, -1, 2, -3, 2]));
console.log(getMaxSubSum1([-1, -2, -3]));
