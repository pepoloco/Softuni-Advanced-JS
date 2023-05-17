function solve(command) {
  let result = [];
  let num = 1;
  for (const el of command) {
    if (el === "add") {
       result.push(num);
    }
    if (el === "remove") {
       result.pop(num);
    }
    num++;
  }
  if (result.length <= 0) {
     return "Element";
  } else {
    result.forEach((element) => {
       console.log(element);
    });
  }
}
solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);