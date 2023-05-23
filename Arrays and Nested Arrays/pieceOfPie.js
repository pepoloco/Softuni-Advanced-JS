function solve(targetFlavour, flavour1, flavuor2) {
  let newArr = [];
  const startIndex = targetFlavour.indexOf(flavour1);
  const endIndex = targetFlavour.indexOf(flavuor2) + 1;
  newArr = targetFlavour.slice(startIndex, endIndex);
  return newArr;
}
console.log(
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
  )
);

console.log(
  solve(
    [
      "Apple Crisp",
      "Mississippi Mud Pie",
      "Pot Pie",
      "Steak and Cheese Pie",
      "Butter Chicken Pie",
      "Smoked Fish Pie",
    ],
    "Pot Pie",
    "Smoked Fish Pie"
  )
);