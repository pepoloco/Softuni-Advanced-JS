function solve(...numbers) {
  const largestNum = Math.max(...numbers);
  console.log(`The largest number is ${largestNum}.`);
}
solve(5, -3, 16);
solve(-3, -5, -22.5);
/*Print the following text
on the console: `The largest number is {number}.`*/
