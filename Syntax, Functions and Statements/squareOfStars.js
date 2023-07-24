function solve(argument) {
  let result = "";
  for (let i = 0; i < argument; i++) {
    for (let y = 0; y < argument; y++) {
      result += " *";
    }
    result += "\n";
  }
  console.log(result);
}
solve(1);
solve(7);
