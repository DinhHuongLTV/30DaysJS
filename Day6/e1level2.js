let e1L2Length = Math.floor(Math.random() * 20 + 1);
const e1L2Arr = [];
while (e1L2Arr.length < e1L2Length) {
    let e1l2Index1 = Math.floor(Math.random() * 3);
    e1L2Arr.push(charArr[e1l2Index1][Math.floor(Math.random() * charArr[e1l2Index1].length)]);
}
console.log(e1L2Arr);