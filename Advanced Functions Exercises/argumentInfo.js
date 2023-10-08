function solve(...input) {
  let object = {};
  for (const element of input) {
    let typeCheck = typeof (element);
    if (typeCheck === 'string') {
      object[typeCheck] = element;
    } else if (typeCheck === 'number') {
      object[typeCheck] = element;
    } else if (typeCheck === 'function') {
      object[typeCheck] = element;
    } else {
      return;
    }
  }
  for (const el of Object.entries(object)) {
    if (el[0] === 'string') {
      object[el[0]] += 1
    }
  }
  console.log(object);
}
solve('cat', 42, function () { console.log('Hello world!'); }
)
