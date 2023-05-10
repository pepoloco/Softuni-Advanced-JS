function calc(...input) {
  let [fruit, weight, price] = input;
  const weightToKg = weight / 1000;
  const money = price * weightToKg;
  return `I need ${money.toFixed(2)} to buy ${weightToKg.toFixed(
    2
  )} kilograms ${fruit}.`;
}
console.log(calc("orange", 2500, 1.8));
