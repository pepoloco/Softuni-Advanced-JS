function solve(array) {
  let object = {};
  for (const element of array) {
    const [town, population] = element.split(" <-> ");
    if (!object[town]) {
      object[town] = +population;
    } else if (object[town]) {
      object[town] += +population;
    }
  }
  for (const [key, value] of Object.entries(object))
    console.log(`${key} : ${value}`);
  {
  }
}
solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
solve([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
