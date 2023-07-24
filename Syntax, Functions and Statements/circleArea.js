function solve(arg) {
  const typeOfArg = typeof arg;
  const circleOfArea = Math.abs(Math.PI * Math.pow(arg, 2)).toFixed(2);
  if (typeOfArg !== "number") {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeOfArg}.`
    );
  } else {
    console.log(circleOfArea);
  }
}
solve(5);
solve("name");

//
function solve(arg) {
  const typeOfArg = typeof arg;
  const circleOfArea =
    typeOfArg === "number"
      ? Math.abs(Math.PI * Math.pow(arg, 2)).toFixed(2)
      : null;

  console.log(
    typeOfArg === "number"
      ? circleOfArea
      : `We can not calculate the circle area, because we receive a ${typeOfArg}.`
  );
}

solve(5);
solve("name");
