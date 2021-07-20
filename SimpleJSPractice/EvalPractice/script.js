function evalCalc(str) {
  return eval(`let x; x = ${str}`);
}

console.log(evalCalc('2*3+2'));
console.log(evalCalc('1/0'));
console.log(evalCalc('5 * 5 + 25'));
console.log(evalCalc('10 - 20'));
console.log(evalCalc('0*0'));
console.log(evalCalc('-1+\'word\''));
