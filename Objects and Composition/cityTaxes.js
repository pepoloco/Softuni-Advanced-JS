function solve(name, population, treasury) {
  let obj = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes(){
        this.treasury += Math.round(this.population * this.taxRate);
    },
    applyGrowth(percent){
        this.population += Math.round(this.population * percent / 100);
    },
    applyRecession(percent){
        this.treasury -= Math.round(this.treasury * percent / 100);
    }
  };
  return obj;
}
const city =
 solve('Tortuga',
 7000,
 15000);
city.collectTaxes();
console.log(city);
city.applyGrowth(5);
console.log(city);
