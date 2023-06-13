function solve(input) {
  let arrCopy = [...input];
  let bottles = {};
  let juices = {};
  for (const el of arrCopy) {
    let [juiceName, quantity] = el.split(" => ");

    if (!juices[juiceName]) {
      juices[juiceName] = +quantity;
    } else {
      juices[juiceName] += +quantity;
    }

    for (let [juice, quantity] of Object.entries(juices)) {
      let count = 0;
      while (quantity >= 1000) {
        count++;
        quantity -= 1000;
      }
      if (count > 0) {
        bottles[juice] = count;
      }
    }
  }
  if (Object.keys(bottles).length === 0) {
    console.log("There are no bottles!");
  } else {
    for (const [juice, quanti] of Object.entries(bottles)) {
      console.log(`${juice} => ${quanti}`);
    }
  }
}
solve([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
