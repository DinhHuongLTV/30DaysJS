const convertHexaToRgb = (hexaCode) => {
    const decimal = [], res = [];

    // convert hexa to related rgb code
    while (hexaCode.length > 0) {
        let temp = hexaCode.shift().charCodeAt(0);
        let range;
        if (temp <= 57 && temp >= 48) {
            range = 48;
        }
        else if (temp >= 65 && temp <= 90) {
            range = 55;
        }
        else if (temp >= 97 && temp <= 122) {
            range = 87;
        }
        decimal.push(temp - range);
    }
    // calculate
    let i = 0;
    while (res.length < 3) {
        res.push(decimal[i] * (16 ** 1) + decimal[i + 1] * (16 ** 0));
        i += 2;
    }
    return res;
};


console.log(convertHexaToRgb(['f', 'F', 'a', 'c', '1', 'f']));
