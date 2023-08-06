function solve(input) {
  let biggest = 0
  let arr = [];
  for (let num = 0; num < input.length; num++) {
    let curNum = input[num];
    if (curNum >= biggest) {
      biggest = curNum
      arr.push(curNum);
    } else {
      continue;
    }
  }
  return arr;
}
solve([1,
  3,
  8,
  4, 10,
  12,
  3,
  2,
  24])
solve([20,
  3,
  2,
  15, 6,
  1]

)