function diagonalSum(arrays) {
  let mainSum = 0;
  let secondarySum = 0;
  for (let i = 0; i < arrays.length; i++) {

    mainSum += arrays[i][i];
    secondarySum += arrays[i][arrays.length - i - 1];
  }
  console.log(mainSum, secondarySum);
}
diagonalSum([
  [20, 40],
  [10, 60],
]);
