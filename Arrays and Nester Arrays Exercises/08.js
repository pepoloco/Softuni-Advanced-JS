function solve(arr) {
  const sortedArr = arr.sort((a, b) => {
    const firstCriteria = a.length - b.length;
    const secondCriteria = a.localeCompare(b);
    return firstCriteria || secondCriteria;
  });

  console.log(sortedArr.join("\n"));
}
solve(["alpha", "beta", "gamma"]);
console.log('===============');
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
