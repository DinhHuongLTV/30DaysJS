let numberOfCharacters = Number(prompt(`Enter number of characters: `));
let numberOfIds = Number(prompt(`Enter number of ids: `));

const userIdGeneratedByUser = (numberOfCharacters, numberOfIds) => {
    let res = [], arr = [];
    for (let i = 1; i <= numberOfIds; i++) {
        let temp = [];
        while (temp.length < numberOfCharacters) {
            let index1 = Math.floor(Math.random() * charArr.length);
            let index2 = Math.floor(Math.random() * charArr[index1].length);
            temp.push(charArr[index1][index2]);
        }
        arr.push(temp);
    }
    let i = 0;
    while (res.length < arr.length) {
        res.push(arr[i].join(''));
        i++;
    }
    return res;
};

console.log(userIdGeneratedByUser(numberOfCharacters, numberOfIds));