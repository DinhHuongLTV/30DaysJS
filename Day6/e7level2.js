const e7l2Arr = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes(`land`))
        e7l2Arr.push(countries[i]);
}

if (e7l2Arr.length) {
    console.log(e7l2Arr);
} else {
    console.log(`All these countries are without land`);
}