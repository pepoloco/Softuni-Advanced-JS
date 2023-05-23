function equalNeighbors(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      // Check horizontally
      if (j + 1 < array[i].length && array[i][j] === array[i][j + 1]) {
        count++;
      }

      // Check vertically
      if (i + 1 < array.length && array[i][j] === array[i + 1][j]) {
        count++;
      }
    }
  }

  return count;
}

const result = equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

console.log(result);
