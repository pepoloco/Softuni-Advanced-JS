function solve(arr) {

  const sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  sorted.forEach(element => {
    console.log(element);
  });
}
solve(["alpha", "beta", "gamma"]);
console.log('===============');
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
