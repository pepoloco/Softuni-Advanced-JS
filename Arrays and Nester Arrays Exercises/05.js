function solve(arr) {
  let arrCopy = [...arr];
  let biggest = Number.MIN_SAFE_INTEGER;
  let result = [];
  for (let i = 0; i < arrCopy.length; i++) {
    const curElement = arrCopy[i];
    if (curElement >= biggest) {
      result.push(curElement);
      biggest = curElement;
    }
  }
  return result;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);

function solve1(arr) {
  let biggest = Number.MIN_SAFE_INTEGER;
  const result = arr.reduce((acc, cur) => {
    if (cur >= biggest) {
        biggest = cur;
      const tempArr= acc;
      tempArr.push(cur);
      return tempArr;
    }
   return acc;
  }, []);
  return result;
}
console.log(solve1([1, 3, 8, 4, 10, 12, 3, 2, 24]));
