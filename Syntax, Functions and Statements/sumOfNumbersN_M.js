function sumOfNumbers(n, m) {
  let sum = 0;
  for (let i = +n; i <= +m; i++) {
    sum += +i;
  }
  return sum;
}
console.log(sumOfNumbers("1", "5"));

/*let sum = 0;
const sumOfNums = (...input) => {
  for (let i = input[0]; i <= input[1]; i++) {
    sum += +i;
  }
};
sumOfNums("1", "5");
console.log(sum);
*/
