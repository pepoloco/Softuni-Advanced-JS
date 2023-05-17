function solve(arr, rotation) {
  while (rotation > 0) {
    let popped = arr.pop();
    arr.unshift(popped);
    rotation--;
  }
  console.log(arr.join(" "));
}

solve(["1", "2", "3", "4"], 2);

