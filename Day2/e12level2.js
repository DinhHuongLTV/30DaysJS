// console.log(str5);
let firstIndex = str5.indexOf("because");
let length = str5.lastIndexOf("because") - firstIndex + `because`.length;
console.log(`${str5.substr(firstIndex, length)}`);
