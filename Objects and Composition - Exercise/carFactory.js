function solve(car) {
  let carFactory = {};
  carFactory.model = car.model
  if (car.power <= 90) {
    carFactory.engine = {
      power: car.power,
      volume: 1800
    };
  }
  if (car.power > 90 && car.power <= 120) {
    carFactory.engine = {
      power: car.power,
      volume: 2400
    }
  }
  if (car.power > 120 && car.power <= 200) {
    carFactory.engine = {
      power: car.power,
      volume: 3500
    }
  }
  if (car.carriage = 'hatchback') {
    carFactory.carriage = {
      type: car.carriage,
      color: car.color
    }
  }
  else if (car.carriage = 'coupe') {
    carFactory.carriage = {
      type: car.carriage,
      color: car.color
    }
  }
  if (car.wheelsize % 2 !== 0) {
    const size = car.wheelsize;
    carFactory.wheelsize = [size, size, size, size]
  } else {
    const size = car.wheelsize - 1;
    carFactory.wheelsize = [size, size, size, size]
  }
  console.log(carFactory);
}
solve(obj = {
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14
})
