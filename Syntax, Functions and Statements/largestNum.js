function largestNum(...numbers) {
  let largest = 0;
  for (const num of numbers) {
    largest = num;
    if (num > 0) {
      largest = num;
    }
  }
  return largest;
}
console.log(largestNum(5, -3, 16));
