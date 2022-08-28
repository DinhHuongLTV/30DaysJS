const e14Arr = [];
while (e14Arr.length < 5) {
    let temp = Math.floor(Math.random() * 10);
    if (!e14Arr.includes(temp))
        e14Arr.push(temp);
}
console.log(e14Arr);