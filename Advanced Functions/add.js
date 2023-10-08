function solution(initialNumber) {
  function x(n) {
    return initialNumber + n
  }
  return x

}
let add5 = solution(5);
console.log(add5(2)); // Output: 7
console.log(add5(3)); // Output: 8
