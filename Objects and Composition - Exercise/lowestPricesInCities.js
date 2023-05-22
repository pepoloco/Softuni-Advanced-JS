function solve(input) {
  let cities = {};
  input.forEach((element) => {
    let [town, productName, productPrice] = element.split("|");
    if (!cities[productName]) {
      cities[productName] = {};
    }
    cities[productName][town] = +productPrice;
  });

  for (const [product, towns] of Object.entries(cities)) {
    const sorted = Object.entries(towns).sort((a, b) => a[1] - b[1]);
    const [town, price] = sorted[0];
    console.log(`${product}-> ${price} (${town.trim()})`);
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
