console.log(`The year today is: ${now.getFullYear()}`);
console.log(`The month today as a number is: ${now.getMonth() + 1}`);
console.log(`The day today is: ${now.getDay()}`);
console.log(`The day today as a number is: ${now.getDay()}`);
console.log(`The hours now is: ${now.getHours()}`);
console.log(`The minutes now is: ${now.getMinutes()}`);
console.log(`The seconds elapsed from 1/1/1970 to now: ${Math.round(now.getTime() / 1000)}`);