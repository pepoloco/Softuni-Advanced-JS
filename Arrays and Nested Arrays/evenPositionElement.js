function solve(input) {
  const copyArr = input.slice();
  const calcEvenPosition = copyArr.filter((num, index) => index % 2 === 0);
  console.log(calcEvenPosition.join(" "));
}
solve(["20", "30", "40", "50", "60"]);
solve(["5", "10"]);
