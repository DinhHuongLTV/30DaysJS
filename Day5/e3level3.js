let countries1, countries2;
let countriesLength = countries.length;
if (countriesLength % 2) {
    countries1 = countries.slice(0, countriesLength / 2 + 1);
    countries2 = countries.slice(countriesLength / 2 + 1);
} else {
    countries1 = countries.slice(0, countriesLength / 2);
    countries2 = countries.slice(countriesLength / 2);
}
console.log(`Countries1 : ${typeof countries1}`);
console.log(`Countries2 : ${typeof countries2}`);
console.log(`Countries1 : ${Array.isArray(countries1)}`);
console.log(`Countries : ${countries}`);
