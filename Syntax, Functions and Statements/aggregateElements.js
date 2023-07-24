function solve(input) {
  let sum = 0;
  for (const el of input) {
    sum += Number(el);
  }
  let inversedSum = 0;
  input.forEach((element) => {
    inversedSum += 1 / Number(element);
  });
  let concated = "";
  input.forEach((element) => {
    concated += element;
  });
  console.log(sum);
  console.log(inversedSum);
  console.log(concated);
}
solve([1, 2, 3]);
