function solve(...strings) {
  const sumOfStrings = strings.reduce(
    (total, string) => total + string.length,
    0
  );
  const averageLength = Math.trunc(sumOfStrings / 3);
  console.log(sumOfStrings);
  console.log(averageLength);
}
solve("chocolate", "ice cream", "cake");
