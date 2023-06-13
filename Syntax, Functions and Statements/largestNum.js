function largestNum(...numbers) {
  let largest = [numbers[0]];
  for (const el of numbers) {
    if (largest < el) {
      largest = el;
    }
  }

  return `The largest number is ${largest}.`;
}
console.log(largestNum(5, -3, 16));
console.log(largestNum(-3, -5, -22.5));
