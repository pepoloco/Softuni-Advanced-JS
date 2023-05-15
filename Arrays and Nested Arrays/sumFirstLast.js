function sumFirstLast(input) {
    let copyArr = input.slice();
    let first = copyArr.shift();
    let last = copyArr.pop();
    console.log(+first + +last);
}
sumFirstLast(["20", "30", "40"]);
sumFirstLast(["5", "10"]);
