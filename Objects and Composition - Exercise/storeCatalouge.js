function solve(input) {
  let products = []
  for (const stores of input) {
    let [productName, productPrice] = stores.split(' : ')
    let product = { name: productName, price: productPrice };
    products.push(product)
  }
  products.sort((a, b) => a.name.localeCompare(b.name))
  let currentFirstChar = '';
  for (const product of products) {
    const firstChar = product.name[0];

    if (firstChar !== currentFirstChar) {
      currentFirstChar = firstChar;
      console.log(firstChar);
    }
    console.log(`${product.name}: ${product.price}`);
  }
}
solve([
  "Baanna : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
