let userBirth = Number(prompt(`Enter birth year: `));
let userAge = now.getFullYear() - userBirth;
if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive`);
} else {
    console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} year(s)`);
}