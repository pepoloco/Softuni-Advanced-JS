function previousDay(year, month, day) {
  let curDay = new Date(year, month - 1, day);
  curDay.setDate(curDay.getDate() - 1);
  let newYear = curDay.getFullYear();
  let newMonth = curDay.getMonth() + 1;
  let newDate = curDay.getDate();

  return `${newYear}-${newMonth}-${newDate}`;
}
console.log(previousDay(2016, 9, 30));
console.log(previousDay(2016, 1, 1));
