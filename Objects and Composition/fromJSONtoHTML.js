function solve(input) {
  let arr = JSON.parse(input);
  let output = "<table>";
  let firstObj = arr[0];
  output += "<tr>\n";
  for (const key in firstObj) {
    output += `<th>${key}</th>`;
  }
  output += "</tr>\n";

  output += "</tr>\n";
  for (const obj of arr) {
    for (const key in firstObj) {
      output += `<td>${obj[key]}</td>`;
    }
    output += "</tr>\n";
  }
  output += "</table>";

  console.log(output);
}
solve(`[{"Name":"Stamat",
 "Score":5.5},
 {"Name":"Rumen",
 "Score":6}]`);
