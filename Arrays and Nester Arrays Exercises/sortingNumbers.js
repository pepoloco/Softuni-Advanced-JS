function sortingNum(arr) {
  if (arr.length <= 0) {
    return;
  } else {
    let sorted = arr.sort((a, b) => {
      return a - b
    })
    let sortedNumbers = [];
    for (let i = 0; i < sorted.length - 1; i++) {
      let smaller = sorted[i];
      let bigger = sorted.pop();
      sortedNumbers.push(smaller, bigger)
    }
    return sortedNumbers;
  }
}
sortingNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
