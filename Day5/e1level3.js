const ages = [19, 22, 19, 24, 20, 25, 26, 23, 25, 22];
ages.sort();
console.log(`Sorted ages: ${ages}`);
let ageLength = ages.length;
ageLength % 2 ? console.log(`Middle age is ${ages[ageLength / 2 + 1]}`)
    : console.log(`Middle age is ${(ages[ageLength / 2] + ages[ageLength / 2 - 1]) / 2}`);

console.log(`the range of the ages is ${ages[ageLength - 1] - ages[0]}`);

