let e9l2MaxLength = 0, e9l2IndeMax = 0;
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > e9l2MaxLength) {
        e9l2MaxLength = countries[i].length;
        e9l2IndeMax = i;
    }
}

console.log(countries[e9l2IndeMax]);