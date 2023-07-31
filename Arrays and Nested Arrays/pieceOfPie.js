function solve(inputArr, start, end) {
  let newArr = [];
  const indexOne = inputArr.indexOf(start);
  const indexTwo = inputArr.indexOf(end);
  newArr = inputArr.slice(indexOne, indexTwo + 1);
  return newArr;
}
solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
