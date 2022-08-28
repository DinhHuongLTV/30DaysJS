const macAddress = [];
while (macAddress.length < 12) {
    let index1 = Math.floor(Math.random() * charArr2.length);
    let index2 = Math.floor(Math.random() * charArr2[index1].length);
    macAddress.push(charArr[index1][index2]);
}

console.log(macAddress);