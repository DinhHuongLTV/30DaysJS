let myAge = 20;
let yourAge = 120;
let outputString = `${myAge > yourAge ? `I am` : `You are`} ${Math.abs(myAge - yourAge)} years older than ${myAge > yourAge ? `you` : 'me'}`;
console.log(outputString);