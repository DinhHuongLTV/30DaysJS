const hexaCharArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const e2l2Arr = ['#'];
while (e2l2Arr.length < 7) {
    e2l2Arr.push(hexaCharArr[Math.floor(Math.random() * hexaCharArr.length)]);
}

console.log(e2l2Arr);
