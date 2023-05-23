//forEach
// function sameNum(...number) {
//   let numToArr = number.toString().split("");
//   let firstDigit = numToArr[0];
//   let allSame = true;

//   numToArr.forEach((digit) => {
//     if (digit !== firstDigit) {
//       allSame = false;
//     }
//   });

//   console.log(allSame);
// }

// sameNum(2222222);
// sameNum(1234);
//filer
function sameNum(number) {
  let numToArr = number.toString().split("");
  let firstDigit = numToArr[0];
  let allSame = numToArr.filter((digit) => digit !== firstDigit).length === 0;
  let sum = 0;
  for (const el of numToArr) {
    sum += +el;
  }

  console.log(allSame);
  console.log(sum);
}

sameNum(2222222);
sameNum(1234);
//reduce
// function sameNum(number) {
//   let numToArr = number.toString().split("");
//   let allSame = numToArr.reduce((acc, digit) => {
//     if (digit !== acc) {
//       return false;
//     } else {
//       return acc;
//     }
//   }, numToArr[0]);

//   console.log(allSame);
// }

// sameNum(2222222);
// sameNum(1234);
