function solve(width, height, color) {

  let rectangle = {
    width: width,
    height: height,
    color: color.charAt(0).toUpperCase() + color.slice(1),
    calculateArea: function () {
      return this.width * this.height;
    },
  }
  return rectangle

}
let rectangle = solve(4, 5, 'green');
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.color);
console.log(rectangle.calculateArea());