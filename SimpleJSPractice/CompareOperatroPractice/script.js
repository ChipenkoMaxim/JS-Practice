const first = 5 > 4; //true
console.log(first);

const second = "ананас" > "яблоко"; //false
console.log(second);

const thirdth = undefined == null;//true special case
console.log(thirdth);

const fourth = undefined === null;//false
console.log(fourth);

const fifth = null == "\n0\n";//false
console.log(fifth);

const sixth = null === +"\n0\n";//false
console.log(sixth);