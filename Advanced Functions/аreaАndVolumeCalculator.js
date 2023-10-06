function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}
function solve(area, vol, input) {
  let parsed = JSON.parse(input);
  let result = [];
  for (const el of parsed) {
    let areaValue = area.call(el);
    let volValue = vol.call(el);
    result.push({ area: areaValue, volume: vol });
  }
  console.log(result);
}

let input = `[
  {"x": "1", "y": "2", "z": "10"},
  {"x": "7", "y": "7", "z": "10"},
  {"x": "5", "y": "2", "z": "10"}
]`;

solve(area, vol, input);
