function solve(input) {
  const result = {};
  for (const line of input) {
    let [town, product, price] = line.split(" | ");
    if (!result[product]) {
      result[product] = {};
    }
    result[product][town] = Number(price);
  }
  for (const [product, towns] of Object.entries(result)) {
    const sorted = Object.entries(towns).sort((a, b) => a[1] - b[1])
    const [town, price] = sorted[0];
    console.log(`${product} -> ${price} (${town})`);
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
