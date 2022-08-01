// three truethy values
let truethy1 = 'Not an empty string';
let truethy2 = 8402; // a number which is different 0
let truethy3 = {}; // an object or an array;
console.log(`${truethy1 != false} --- ${truethy2 != false} --- ${truethy3 != false}`);
// three falsy values

let falsy1 = ''; // an empty string
let falsy2 = false; // false value
let falsy3 = 0; // NaN
console.log(`${falsy1 != false} --- ${falsy2 != false} --- ${falsy3 != false}`);
