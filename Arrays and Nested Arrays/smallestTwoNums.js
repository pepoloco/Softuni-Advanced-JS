function solve(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        console.log(input[i]);
      }
    }
  }
}
solve([30, 15, 50, 5]);
