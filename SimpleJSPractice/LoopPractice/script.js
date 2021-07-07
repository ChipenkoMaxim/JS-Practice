const printEvenNumberInRange = () => {
  const n = 10;
  for (let i = 0; i <= n; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

printEvenNumberInRange();

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i += 1;
}
