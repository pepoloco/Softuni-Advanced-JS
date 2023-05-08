function sumOfNumbers(n, m) {
  let sum = 0;
  for (let i = +n; i <= +m; i++) {
    sum += +i;
  }
  return sum;
}
console.log(sumOfNumbers("1", "5"));
