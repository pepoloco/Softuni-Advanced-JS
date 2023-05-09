function aggregateElements(input) {
  let sumOfAllElements = 0;
  let sumOfInverseValues = 0;
  let concatedString = "";

  input.forEach((element, i) => {
    sumOfAllElements += element;
    sumOfInverseValues += 1 / element;
    concatedString += element;
  });
  console.log(sumOfAllElements);
  console.log(sumOfInverseValues);
  console.log(concatedString);
}
aggregateElements([1, 2, 3]);
