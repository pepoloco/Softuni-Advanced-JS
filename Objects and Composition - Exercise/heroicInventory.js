function solve(input) {
  const result = [];

  input.forEach((element) => {
    const obj = {};
    const heroDataArr = element.split(' / ')
    obj.name = heroDataArr[0];
    obj.level = +heroDataArr[1];
    obj.item = [heroDataArr[2].split(', ')]
    result.push(obj)
  });
  return JSON.stringify(result)
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
