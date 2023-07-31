function solve(input) {
  let sorted = input.sort((a, b) => {
    return a - b;
  });
  const index = Math.floor(sorted.length / 2);
  if (index % 2 === 0) {
    const lastTwo = sorted.slice(index);
    return lastTwo;
  } else if (index % 2 !== 0) {
    const lastThree = sorted.slice(index);
    return lastThree;
  }
}
solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);
