function sqaureOfStars(input) {
  let result = "";
  for (let i = 0; i < input; i++) {
    for (let y = 0; y < input; y++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
}

sqaureOfStars(5);
