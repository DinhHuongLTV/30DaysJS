const xCalculator = (y) => {
    return (y + 2) / 2;
};
const yCalculator = (x) => {
    return 2 * x - 2;
};
let equation = `y = 2x - 2`;
console.log(`The slope of ${equation} is ${equation.slice(equation.indexOf('=') + 2, equation.indexOf('x'))}`);
console.log(`The x-intercept of ${equation} is ${xCalculator(0)}`);
console.log(`The y-intercept of ${equation} is ${yCalculator(0)}`);