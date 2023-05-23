function cookingByNumbers(...input) {
  let converted = Array.from(input);
  let number = Number(converted.shift());
  converted.forEach((operaiton) => {
    switch (operaiton) {
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
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
