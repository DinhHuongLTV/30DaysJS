const userIP = [];
while (userIP.length < 6) {
    let index1 = Math.floor(Math.random() * charArr.length);
    let index2 = Math.floor(Math.random() * charArr[index1].length);
    userIP.push(charArr[index1][index2]);
}

console.log(userIP);