const findMax = (...args) => {
    let max = args[0];
    for (let i = 1; i < args.length; i++)
        if (max < args[i]) max = args[i];
    return max;
};

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));