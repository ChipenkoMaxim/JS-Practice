function sumTo1(n) {
  if (n < 1) {
    return null;
  }

  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }

  return sum;
}

function sumTo2(n) {
  if (n < 1) {
    return null;
  }

  if (n === 1) {
    return 1;
  }

  return n + sumTo2(n - 1);
}

function sumTo3(n) {
  if (n < 1) {
    return null;
  }

  const firstMemberOfProg = 1;
  const diffOfProg = 1;
  const nMemberOfProg = firstMemberOfProg + (n - 1) * diffOfProg;

  return ((firstMemberOfProg + nMemberOfProg) / 2) * n;
}

const funcArr = [sumTo1, sumTo2, sumTo3];

for (const func of funcArr) {
  const startTime = Date.now();
  console.log('New Function');
  for (let i = 1; i <= 1000; i += 1) {
    func(i);
  }
  const endTime = Date.now();
  console.log(`TimePassed:${endTime - startTime}ms`);
}

const factorial = (n) => (n === 1 ? n : n * factorial(n - 1));

console.log(factorial(5));
// Slow Solution
function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

// Faster Solution
function fib1(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i += 1) {
    const c = a + b;
    a = b;
    b = c;
  }

  return b;
}
console.log(fib1(77));

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Loop
function printList(list) {
  let currNode = list;
  for (; currNode !== null; currNode = currNode.next) {
    console.log(currNode.value);
  }
}

// Recursion
function printList1(list) {
  console.log(list.value);
  if (list.next !== null) {
    printList(list.next);
  }
}

printList1(list);

function printReverseList(list) {
  const printArr = [];
  let currNode = list;
  for (; currNode !== null; currNode = currNode.next) {
    printArr.push(currNode.value);
  }

  printArr.reverse();
  for (const item of printArr) {
    console.log(item);
  }
}

function printReverseList1(list) {
  if (list.next !== null) {
    printReverseList1(list.next);
  }
  console.log(list.value);
}

console.log('Reversed list');
console.log(printReverseList(list));
console.log(printReverseList1(list));
