function biggestEl(input) {
  const concatedFlatted = input.flat(Infinity);
  const biggestNum = Math.max(...concatedFlatted)
    console.log(biggestNum);
}
biggestEl([
  [20, 50, 10],
  [8, 33, 145],
]);
biggestEl([
  [3, 5, 17, 12, 91, 5],
  [-1, 7, 4, 33, 6, 22],
  [1, 8, 99, 3, 10, 43],
]);
