function solve(input) {
  let counter = 1;
  let sortedArr = input.sort((a, b) => {
    return a.localeCompare(b)
  })
  sortedArr.forEach(names => {
    console.log(`${counter}.${names}`);
    counter++;
  });
}
solve(["John",
  "Bob",
  "Christina",
  "Ema"]
)