function solve(array, startIndex, endIndex) {
  let sum = 0;
  if (Array.isArray(array) === false) {
    return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex < array.length) {
    endIndex === array.length - 1;
  }
  return array
    .map((x) => Number(x))
    .reduce((acc, cur, i) => {
      if (i >= startIndex && i <= endIndex) {
        acc += cur;
      }
      return acc;
    }, 0);
}
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
