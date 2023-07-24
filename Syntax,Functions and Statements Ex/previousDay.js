function solve(year, month, day) {
  if (day === 1) {
    const date = new Date(year, month - 1, 0);
    const getYear = date.getFullYear();
    const getMonth = date.getMonth() + 1;
    const getDay = date.getDate();
    console.log(`${getYear}-${getMonth}-${getDay}`);
  } else {
    const date = new Date(year, month - 1, day - 1);
    const getYear = date.getFullYear();
    const getMonth = date.getMonth() + 1;
    const getDay = date.getDate();
    console.log(`${getYear}-${getMonth}-${getDay}`);
  }
}
solve(2016, 9, 30);
solve(2015, 5, 10);
solve(2015, 12, 31);
