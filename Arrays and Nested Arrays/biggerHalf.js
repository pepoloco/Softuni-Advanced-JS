function biggerHalf(input) {
  let sorted = input.sort((a, b) => a - b);
  let startIndex = Math.floor(sorted.length / 2);
  if (startIndex % 2 === 0) {
    return sorted.slice(startIndex);
  } else if (startIndex % 2 !== 0) {
    return sorted.slice(startIndex);
  }
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
