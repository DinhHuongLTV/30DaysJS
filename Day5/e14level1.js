let maxO = 0;
let maxIndex = 0;
let arrE14 = [];
for (let i = 0; i < itCompany.length; i++) {
    if (itCompany[i].includes('o') == false) continue;
    if (itCompany[i].indexOf('o') < itCompany[i].lastIndexOf('o'))
        arrE14.push(itCompany[i]);
    console.log(itCompany[i]);
}

// console.log(itCompany);

// itCompany.forEach(element => {
//     if (element.includes('o') == true && element.indexOf('o') < element.lastIndexOf('o'))
//         arrE14.push(element);
// });
console.log(arrE14);

