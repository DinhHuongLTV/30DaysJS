const charArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    , ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    , ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']];

const e15Arr = [];
while (e15Arr.length < 6) {
    let e15Index = Math.floor(Math.random() * 3);
    e15Arr.push(charArr[e15Index][Math.floor(Math.random() * charArr[e15Index].length)]);
}
console.log(e15Arr);
// console.log(temp2);
