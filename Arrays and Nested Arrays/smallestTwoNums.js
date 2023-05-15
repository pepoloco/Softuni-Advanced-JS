function smallestTwo(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b);
  let smallestElements = sortedNumbers.filter((num, index) => index < 2);
  console.log(smallestElements.join(" "));
}

smallestTwo([30, 15, 50, 5]);
