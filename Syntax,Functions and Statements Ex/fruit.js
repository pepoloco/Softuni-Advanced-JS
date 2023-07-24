function solve(...input) {
  //
  const [fruit, weight, pricePerKg] = input;
  const weightToKg = weight / 1000;
  let money = 0;
  money = weightToKg * pricePerKg;

  console.log(
    `I need $${money.toFixed(2)} to buy ${weightToKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

solve("orange", 2500, 1.8);
