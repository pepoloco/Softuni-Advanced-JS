function solve(input) {
  let calorieObject = {};
  for (let i = 0; i < input.length; i++) {
    let name = input[i];
    if (i % 2 === 0){
        calorieObject[name] = +input[i + 1];
    }
  }
  return calorieObject;
}
solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
solve(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
