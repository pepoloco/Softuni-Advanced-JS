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

//another way;
/*const largestNum = function (...input) {
  let numbers = input;
  let largestNum = 0;
  for (const number of numbers) {
    if (number > largestNum) {
      largestNum = number;
    } else {
      continue;
    }
  }
  return largestNum;
};
console.log(largestNum(5, -3, 16));
*/
