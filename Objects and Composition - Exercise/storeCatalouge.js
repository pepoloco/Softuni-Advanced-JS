function solve(input) {
  let storage = {};
  input.forEach((element) => {
    let [productName, productPrice] = element.split(":");
    storage[productName] = +productPrice;
  });

  let sortedProducts = Object.entries(storage).sort(
    ([productNameA], [productNameB]) =>
      productNameA.localeCompare(productNameB)
  );

  let currentInitial = "";
  sortedProducts.forEach(([productName, productPrice]) => {
    let initial = productName[0].toUpperCase();
    if (initial !== currentInitial) {
      console.log(initial);
      currentInitial = initial;
    }
    console.log(`  ${productName.trim()}: ${productPrice}`);
  });
}

solve([
  "Baanna:2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
