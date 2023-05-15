function solve(input) {
  let result = [];
  input.forEach((element, i) => {
    if (i % 2 !== 0) {
      result.push(element);
    }
  });
  const double = result.map((x) => x * 2).reverse();
  return double;
}
console.log(solve([10, 15, 20, 25]));
