function solve(n, m) {
  const num1 = Number(n);
  const num2 = Number(m);
  let sum = 0;
  for (let x = num1; x <= num2; x++) {
    sum += x;
  }
  return sum;
}
solve("1", "5");
