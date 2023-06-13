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
      if (quantity > 1000) {
        while (quantity >= 1000) {
          count++;
          quantity -= 1000;
        }
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
