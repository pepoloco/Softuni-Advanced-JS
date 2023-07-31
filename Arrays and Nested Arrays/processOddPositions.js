function solve(input) {
  let oddPositions = [];
  input.forEach((element, index) => {
    if (index % 2 != 0) {
      oddPositions.push(element);
    }
  });
  let doubledSorted = oddPositions
    .map((a) => {
      return a * 2;
    })
    .reverse();
  return doubledSorted;
}
solve([10, 15, 20, 25]);
