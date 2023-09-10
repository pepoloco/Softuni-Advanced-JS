function solve(object) {
  const obj = { ...object };
  if (obj.dizziness) {
    obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
    console.log(obj);
    obj.dizziness = false;
    return obj;
  }
  console.log(obj);
  return obj;


}
solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
