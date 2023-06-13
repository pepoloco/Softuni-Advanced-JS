function solve(input) {
  let arr = JSON.parse(input);
  let output = "<table>";
  let firstObj = arr[0];

  output += '\n<tr>'

  for (const key in firstObj) {
    output += `<th>${key}</th>`;
  }
  output += "</tr>";
  for (const obj of arr) {
    output += "\n<tr>";
    for (const key in firstObj) {
      output += `<td>${obj[key]}</td>`;
    }
    output += "</tr>";
  }
  output += "\n</table>";
  console.log(output);
}
solve(`[{"Name":"Stamat",
 "Score":5.5},
 {"Name":"Rumen",
 "Score":6}]`);
