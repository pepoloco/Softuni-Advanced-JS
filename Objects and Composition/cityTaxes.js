function cityTaxes(name, population, treasury) {
    let obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * (percent / 100));
        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * (percent / 100));
        }
    };

    return obj;
}

const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city);
city.applyGrowth(10);
console.log(city);
city.applyRecession(5);
console.log(city);
