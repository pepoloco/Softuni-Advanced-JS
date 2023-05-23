function solve(input) {
  let endArr = [];
  input.forEach((element) => {
    if (element < 0) {
      endArr.unshift(element);
    } else {
      endArr.push(element);
    }
  });
 for (const el of endArr) {
  console.log(el);
 }
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);