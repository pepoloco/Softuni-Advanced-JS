function solve(...arguments) {
  let object = {};

  for (const arg of arguments) {
    let type = typeof arg;
    console.log(`${type}: ${arg}`);
    if (!object[type]) {
      object[type] = 1;
    } else {
      object[type]++;
    }
  }
  let sortedInfo = Object.entries(object)
  for (const info of sortedInfo.sort((a, b) => {
    return b[1] - a[1];
  })) {
    console.log(`${info[0]} = ${info[1]}`);
  }
}
solve('cat', 'cat', {}, 42, 'cat', function () { console.log('Hello world!'); })