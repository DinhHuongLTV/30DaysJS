const solveQuadratic = (a = 1, b = 0, c = 0) => {
    let resArrE2L2 = [];
    let delta = b ** 2 - 4 * a * c;

    if (b === 0 && delta === 0) {
        resArrE2L2.push(0);
    } else {
        if (delta > 0) {
            resArrE2L2.push((-b + Math.sqrt(delta)) / 2 / a);
            resArrE2L2.push((-b - Math.sqrt(delta)) / 2 / a);
        } else if (delta < 0) {
            resArrE2L2.push(0);
        } else if (delta === 0) {
            resArrE2L2.push(-b / 2 / a);
        }
    }
    return resArrE2L2;
};

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}