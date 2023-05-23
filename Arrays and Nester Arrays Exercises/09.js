function solve(arr) {
  let totalSumRow = arr[0].reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

  for (let row = 0; row < arr.length; row++) {
    let sumRow = 0;
    let sumCol = 0;
    for (let col = 0; col < arr.length; col++) {
      sumRow += arr[col][row];
      sumCol += arr[row][col];
    }
    if (totalSumRow !== sumRow || totalSumRow !== sumCol) {
      return false;
    }
  }
  return true;
}
console.log(solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]));
