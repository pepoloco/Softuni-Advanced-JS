function solve(input) {
    let calorieObject = {};
    let arrCopy = input.slice();
    for (let i = 0; i < arrCopy.length; i += 2) {
        if (i + 1 < arrCopy.length) {
            calorieObject[arrCopy[i]] = arrCopy[i + 1];
        }
    }
    console.log(calorieObject);
}
solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
// solve(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
