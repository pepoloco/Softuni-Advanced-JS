function solve(arr, delimiter) {

  let arrCopy = arr.slice();

  console.log(arrCopy.join(delimiter));


}
solve(['One',
  'Two',
  'Three',
  'Four',
  'Five'],
  '-'
)