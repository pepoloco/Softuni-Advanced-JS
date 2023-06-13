function solve(...args) {
  const obj = {};
  for (const el of args) {
    const typeOfEl = typeof el;
    console.log(`${typeOfEl}: ${el}`);
    obj[typeOfEl] = obj[typeOfEl] ? (obj[typeOfEl] += 1) : (obj[typeOfEl] = 1);
  }
  let result = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (const [k, v] of result) {
    console.log(`${k} = ${v}`);
  }
}
solve("cat", 42, function () {
  console.log("Hello world!");
});
solve({ name: "bob" }, 3.333, 9.999);
