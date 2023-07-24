function solve(input) {
  let sum = 0;
  const numStr = input.toString().split("");
  const firstDigit = numStr[0];
  const check = numStr.some((x) => x !== firstDigit);
  sum = numStr.reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);
  if (check === true) {
    console.log(false);
    console.log(sum);
  } else {
    console.log(true);
    console.log(sum);
  }
}
solve(2222222);
solve(1234);
