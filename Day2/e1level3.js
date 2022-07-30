let myString = `Love is the best thing in this world. Some found their love and some are still looking for their love.`;
const regEx1 = /love/gi;

console.log(`'love' shows up ${myString.match(regEx1).length} times in sentence: ${myString}`);
