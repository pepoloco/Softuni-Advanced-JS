function solve(arr) {
  let output = arr.sort((a, b) => a.localeCompare(b));
  let result = [];
  output.forEach((element, i) => {
    result.push(`${i + 1}.${element}`);
  });
  return result.join('\n');
}
console.log(solve(["John", "Bob", "Christina", "Ema"]));
