const fx = (x) => {
    return x ** 2 + 6 * x + 9;
};

let X = Number(prompt(`Enter x: `));
console.log(fx(X));
let delta = 6 ** 2 - 4 * 1 * 9;

if (delta > 0) {
    console.log(`At ${(-6 + Math.sqrt(delta)) / 2 * 1} and ${(-6 - Math.sqrt(delta)) / 2 * 1} y is 0`);
} else if (delta == 0) {
    console.log(`At ${-6 / 2 * 1} y is 0`);
} else {
    console.log(`There is no values of x that y is 0`);
}