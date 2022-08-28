const e8l2Arr = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes(`ia`))
        e8l2Arr.push(countries[i]);
}

if (e8l2Arr.length) {
    console.log(e8l2Arr);
} else {
    console.log(`All these countries are without land`);
}