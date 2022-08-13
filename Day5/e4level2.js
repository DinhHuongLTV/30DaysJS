const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

if (countries.includes(`Ethiopia`)) {
    let indexEthiopia = countries.indexOf(`Ethiopia`);
    console.log(countries[indexEthiopia].toUpperCase());
} else {
    countries.push(`Ethiopia`);
    alert(`Ethiopia has been added`);
}