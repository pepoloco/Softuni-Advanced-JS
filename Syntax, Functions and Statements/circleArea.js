function circleArea(argument) {
  if (!typeof argument !== "number") {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof argument}.`
    );
  } else if (typeof argument === "number") {
    console.log((Math.pow(argument, 2) * Math.PI).toFixed(2));
  }
}
circleArea(5);
