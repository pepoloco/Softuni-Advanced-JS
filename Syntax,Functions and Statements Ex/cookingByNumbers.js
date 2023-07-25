function solve(...input) {
  let number = Number(input.shift());
  let operations = input;
  operations.forEach((operation) => {
    switch (operation) {
      case "chop":
        number /= 2;
        console.log(number);
        break;
      case "dice":
        number = Math.sqrt(number);
        console.log(number);
        break;
      case "spice":
        number++;
        console.log(number);
        break;
      case "bake":
        number *= 3;
        console.log(number);
        break;
      case "fillet":
        number = Math.abs(number * 0.2 - number);
        console.log(number);
        break;
    }
  });
}
// solve("32", "chop", "chop", "chop", "chop", "chop");
solve("9", "dice", "spice", "chop", "bake", "fillet");
