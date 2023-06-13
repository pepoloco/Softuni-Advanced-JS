function stringLength(...strings) {
  let sumLength = 0;
  let averageLength = 0;
  
  for (const str of strings) {
    sumLength += str.length;
  }

  if (strings.length > 0) {
    averageLength = sumLength / strings.length;
  }
  console.log(sumLength);
  console.log(Math.floor(averageLength));
}

stringLength("chocolate", "ice cream", "cake");
