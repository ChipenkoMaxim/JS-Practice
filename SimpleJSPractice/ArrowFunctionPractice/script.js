const ask = (question, yes, no) => ((question === 'yes') ? yes() : no());

ask(
  'yes',
  () => { console.log('Yes, i am'); },
  () => { console.log('No, i am not'); },
);
