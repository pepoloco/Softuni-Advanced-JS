function solve(array, startIndex, endIndex) {
  if (Array.isArray(array) === false) {
    return NaN;
  }
  if (array.find((x) => Number.isNaN(Number(x)))) {
    return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex > array.length) {
    endIndex === array.legnth - 1
  }
 return array.reduce((a, b, i) => {
    if (i >= startIndex && i <= endIndex) {
      a += b
    }
    return a;
  }, 0)

}
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));