function squareOfStars(input) {
  let result = "";
  for (let i = 0; i < input; i++) {
    for (let y = 0; y < input; y++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
}
squareOfStars(10);
