function printNumbers(from, to) {
  let currentValue = from;
  let timer = setTimeout(function print() {
    if (currentValue <= to) {
      console.log(currentValue);
      currentValue += 1;
      timer = setTimeout(print, 1000);
    } else {
      clearTimeout(timer);
    }
  }, 1000);
}

function printNumbersInterval(from, to) {
  let currentValue = from;
  const timer = setInterval(() => {
    if (currentValue <= to) {
      console.log(currentValue);
      currentValue += 1;
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

printNumbers(1, 10);
printNumbersInterval(1, 10);

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j += 1) {
  i += 1;
}
