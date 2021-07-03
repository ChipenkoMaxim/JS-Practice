function ucFirst(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(ucFirst('vasya'));

function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  if (lowerStr.includes('viagra')
    || lowerStr.includes('xxx')) {
    return true;
  }

  return false;
}

console.log(checkSpam('buy ViAgRA now') === true);
console.log(checkSpam('free xxxxx') === true);
console.log(checkSpam('innocent rabbit') === false);

function truncate(str, maxlength) {
  if (str.length === maxlength
    || str.length < maxlength) {
    return str;
  }

  const truncateStr = `${str.slice(0, maxlength - 1)}…`;

  return truncateStr;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)
=== 'Вот, что мне хотело…');
console.log(truncate('Всем привет!', 20) === 'Всем привет!');
// console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));

const extractCurrencyValue = (str) => +str.slice(1);

console.log(extractCurrencyValue('$120') === 120);
