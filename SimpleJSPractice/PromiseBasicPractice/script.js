const promise = new Promise((resolve) => {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

// Only first resolve
promise.then(console.log);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('Complete for 3 seconds'));
