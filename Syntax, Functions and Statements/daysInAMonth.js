function solve(month, year) {
  const day = new Date(year, month, 1);
  const lastDayOfMonth = new Date(day.getTime() - 1);
  console.log(lastDayOfMonth.getDate());
}
solve(1, 2012);
solve(2, 2021);
