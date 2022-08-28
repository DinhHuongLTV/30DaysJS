const countriesAnalizer = (countryName) => {
    const res = [];
    res.push(countryName);
    res.push(countryName.slice(0, 3));
    res.push(countryName.length);
    return res;
};

const e6l2Arr = [];
for (let i = 0; i < countries.length; i++) {
    e6l2Arr.push(countriesAnalizer(countries[i]));
}
console.log(e6l2Arr);