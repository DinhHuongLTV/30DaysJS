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
const e4l2Arr = [];
let i = 0;
while (e4l2Arr.length < countries.length) {
    e4l2Arr.push(countries[i].toUpperCase());
    i++;
}
console.log(e4l2Arr);