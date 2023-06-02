function solution(initialNumber) {
  let currentNumber = initialNumber;

  function addNumber(number) {
    currentNumber += number;
    return currentNumber;
  }

  return addNumber;
}

let add5 = solution(5);
console.log(add5(2)); // Output: 7
console.log(add5(3)); // Output: 8
