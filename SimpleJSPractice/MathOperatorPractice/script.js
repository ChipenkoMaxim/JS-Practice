const first = `${1}${0}`; // "10" string
console.log(`${first} ${typeof first}`);

const second = '' - 1 + 0; // -1 number
console.log(`${second} ${typeof second}`);

const third = true + false; // 1 number;
console.log(`${third} ${typeof third}`);

const fourth = 6 / '3'; // 2 number
console.log(`${fourth} ${typeof fourth}`);

const fifth = '2' * '3'; // 6 number
console.log(`${fifth} ${typeof fifth}`);

const sixth = `${4 + 5}px`; // "9px" string;
console.log(`${sixth} ${typeof sixth}`);

const seventh = `$${4}${5}`; // "$45" string
console.log(`${seventh} ${typeof seventh}`);

const eighth = '4' - 2; // 2 number;
console.log(`${eighth} ${typeof eighth}`);

const ninth = '4px' - 2; // NaN number
console.log(`${ninth} ${typeof ninth}`);

const tenth = 7 / 0; // Infinity number
console.log(`${tenth} ${typeof tenth}`);

const eleventh = `  -9  ${5}`; // "  -9  5" string
console.log(`${eleventh} ${typeof eleventh}`);

const twelveth = '  -9  ' - 5; // "-14" number
console.log(`${twelveth} ${typeof twelveth}`);

const thirteenth = null + 1; // 1 number
console.log(`${thirteenth} ${typeof thirteenth}`);

const fourteenth = undefined + 1; // NaN number because undefined -> NaN
console.log(`${fourteenth} ${typeof fourteenth}`);

const fifteenth = ' \t \n' - 2; // -2 number because "\t\n" empty string
console.log(`${fifteenth} ${typeof fifteenth}`);

const sixteenth = NaN + 1; // NaN number
console.log(`${sixteenth} ${typeof sixteenth}`);

let a = prompt("Первое число?", 1); //1 string
let b = prompt("Второе число?", 2); //2 string

alert(+a + +b); // 3 number