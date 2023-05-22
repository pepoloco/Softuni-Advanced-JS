function solve(object) {
  let worker = Object.assign({}, object);
  if (worker.dizziness){
    worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
    worker.dizziness = false;
    console.log(worker);
    return worker;
  }
  console.log(worker);
  return worker;
}
solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
