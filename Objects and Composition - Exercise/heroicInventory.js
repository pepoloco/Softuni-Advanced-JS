function solve(input) {
  let inputs = input.shift();
  let result = [];
  while (inputs) {
    let [heroName, lvl, item] = inputs.split(" / ");
    let hero = {};
    (hero.name = heroName),
      (hero.level = +lvl),
      (hero.items = item.split(", "));

    result.push(hero);
    inputs = input.shift();
  }
  let toJSON = JSON.stringify(result);
  console.log(toJSON);
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
