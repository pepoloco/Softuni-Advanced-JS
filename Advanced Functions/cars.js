function solve(commands) {
  let objects = {};

  function create(name, parentName) {
    let obj = {};
    if (parentName) {
      obj = Object.create(objects[parentName]);
    }
    objects[name] = obj;
  }

  function set(name, key, value) {
    let obj = objects[name];
    obj[key] = value;
  }

  function print(name) {
    let obj = objects[name];
    let result = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(`${key}:${obj[key]}`);
      }
    }
    console.log(result.join(','));
  }

  for (let command of commands) {
    let [action, name, commandType, param] = command.split(' ');
    if (action === 'create') {
      if (commandType === 'inherit') {
        create(name, param);
      } else {
        create(name);
      }
    } else if (action === 'set') {
      set(name, commandType, param);
    } else if (action === 'print') {
      print(name);
    }
  }
}

solve([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2'
]);
