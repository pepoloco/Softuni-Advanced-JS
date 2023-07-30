function solve(input) {
  let firstNum = input.shift();
  let secondNum = input.pop();
  let sum = Number(firstNum) + Number(secondNum);

  return sum;
}
solve(["20", "30", "40"]);
solve(["5", "10"]);
solve(["5"]);
