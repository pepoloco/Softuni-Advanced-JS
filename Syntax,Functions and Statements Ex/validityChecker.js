function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function checkDistance(x1, y1, x2, y2) {
  // Check distance from (x1, y1) to (0, 0)
  let distance1 = calculateDistance(x1, y1, 0, 0);
  if (Number.isInteger(distance1)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  // Check distance from (x2, y2) to (0, 0)
  let distance2 = calculateDistance(x2, y2, 0, 0);
  if (Number.isInteger(distance2)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  // Check distance from (x1, y1) to (x2, y2)
  let distance3 = calculateDistance(x1, y1, x2, y2);
  if (Number.isInteger(distance3)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

// Test case
checkDistance(2, 1, 1, 1);
console.log('-------------');
checkDistance(3, 0, 0, 4);