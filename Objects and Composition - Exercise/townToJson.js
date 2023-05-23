function solve(input) {
  const matrix = input
    .map((row) =>
      row
        .trim()
        .split("|")
        .map((cell) => cell.trim())
    )
    .map((row) => row.filter((cell) => cell !== ""));
  const headers = matrix[0];
  const data = matrix.slice(1);

  let result = data.map((row) => {
    const obj = {};
    headers.forEach((element, i) => {
      const tryParseToNum = Number(row[i]);
      obj[element] = isNaN(tryParseToNum)
        ? row[i]
        : Number(tryParseToNum.toFixed(2));
    });
    return obj;
  });
  console.log(JSON.stringify(result));
}

solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
