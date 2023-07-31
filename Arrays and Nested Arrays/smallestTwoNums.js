function solve(input) {
  let smallestTwo = input.sort((a, b) => {
    return a - b;
  });
  smallestTwo = smallestTwo.slice(0, 2);

  console.log(smallestTwo.join(", "));
}

solve([30, 15, 50, 5]);
