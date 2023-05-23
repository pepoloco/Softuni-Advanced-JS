function solve() {
  const mageHero = {
    mageProto: {
      cast: function (magic) {
        this.mana--;
        console.log(`${this.name} cast ${magic}`);
      },
    },
    mage: function (name) {
      const mageObj = {
        ...this.mageProto,
        name,
        mana: 100,
        health: 100,
      };
      return mageObj;
    },
  };
  const fighterHero = {
    fighterProto: {
      fight: function () {
        this.stamina--;
        console.log(`${this.name} slashes at the foe!`);
      },
    },
    fighter: function (name) {
      const fighterObj = {
        ...this.fighterProto,
        name,
        stamina: 100,
        health: 100,
      };
      return fighterObj;
    },
  };
  const allHeroes = {
    ...mageHero,
    ...fighterHero,
  };
  return allHeroes;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
