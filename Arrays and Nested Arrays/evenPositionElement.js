function evenPositionElement(input) {
  let evenPosNums = [];
  input.forEach((element, i) => {
    if (i % 2 === 0) {
      evenPosNums.push(element);
    }
  });
  console.log(evenPosNums.join(" "));
}
evenPositionElement(["20", "30", "40", "50", "60"]);
