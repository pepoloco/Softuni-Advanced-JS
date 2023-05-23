function solve(num1, num2) {
  while (num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp % num2;
  }
  return num1;
}

console.log(solve(15, 5));
