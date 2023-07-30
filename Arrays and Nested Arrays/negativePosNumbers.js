function solve(input) {
  let sortingArr = [];
  for (const el of input) {
    if (el < 0) {
      sortingArr.unshift(el);
    } else {
      sortingArr.push(el);
    }
  }
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
