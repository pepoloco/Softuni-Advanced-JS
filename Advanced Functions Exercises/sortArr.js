function solve(arr, arg) {
  if (arg === 'asc') {
    return arr.sort((a, b) => a - b);
  } else if (arg === 'desc') {
    return arr.sort((a, b) => b - a);
  } else {
    return;
  }
}
solve([14, 7, 17, 6, 8], "asc");
solve([14, 7, 17, 6, 8], "desc");
