function daysInAMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(daysInAMonth(1, 2012));

/*
const dayGet = (...inputs) => {
  let day = 0;
  let [month, year] = inputs;
  return new Date(year, month, 0).getDate();
};
console.log(dayGet(1, 2012));
*/