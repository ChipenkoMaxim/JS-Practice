const firstDate = new Date(2012, 1, 20, 3, 12);
console.log(firstDate);

// My Solution
function getWeekDay(date) {
  const dayOfWeek = date.getDay();
  switch (dayOfWeek) {
    case 0:
      return 'ВС';
    case 1:
      return 'ПН';
    case 2:
      return 'ВТ';
    case 3:
      return 'СР';
    case 4:
      return 'ЧТ';
    case 5:
      return 'ПТ';
    case 6:
      return 'СБ';
    default:
      break;
  }
}

// Better Solution
function getWeekDay1(date) {
  const dayOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return dayOfWeek[date.getDay()];
}

const date = new Date(2015, 0, 2);
console.log(getWeekDay(date));

function getLocalDay(date) {
  return date.getUTCDay() + 1;
}

console.log(getLocalDay(date));

function getDateAgo(date, days) {
  const dateCopy = new Date(date.getTime());
  dateCopy.setDate(date.getDate() - days);

  return dateCopy.getDate();
}

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2012, 0));

// My Solution
function getSecondsToday() {
  const todayDate = new Date();
  return (todayDate.getHours() * 3600) + (todayDate.getMinutes() * 60)
    + todayDate.getSeconds();
}

console.log(getSecondsToday());

// Alter Solution
function getSecondsToday1() {
  const now = new Date();

  // создаём объект с текущими днём/месяцем/годом
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}

function getSecondsToTomorrow() {
  const todayDate = new Date();
  const hoursToSeconds = todayDate.getHours() * 3600;
  const minutesToSeconds = todayDate.getMinutes() * 60;
  const secondsInOneDay = 24 * 3600;
  return secondsInOneDay - (hoursToSeconds + minutesToSeconds + todayDate.getSeconds());
}

console.log(getSecondsToTomorrow());

// function formatDate(date) {
//   const dateNow = Date.now();
//   if (dateNow - date.getTime() < 1000) {
//     console.log('right now');
//   } else if (dateNow - date.getTime() < 60 * 1000) {
//     console.log(`${(dateNow - date.getTime()) / 1000} secs ago`);
//   } else if (dateNow - date.getTime() < 60 * 60 * 1000) {
//     console.log(`${((dateNow - date.getTime()) / 60) / 1000} mins ago`);
//   } else {
//     console.log();
//   }
// }

// Better Solution
function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  const diffMs = new Date() - date;
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = diffSec / 60;
  const diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? `0${month}` : month;
  dayOfMonth = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;
  hour = hour < 10 ? `0${hour}` : hour;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } if (diffMin < 1) {
    return `${diffSec} сек. назад`;
  } if (diffHour < 1) {
    return `${diffMin} мин. назад`;
  }
  return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(new Date(new Date() - 86400 * 1000));
