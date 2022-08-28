let numberOfLoggedInUsers = 0;
let numberOfHighPointsUser = 0;
const loggedInUser = [];
const highPointsUser = [];

for (const name in users) {
    if (users[name].isLoggedIn) {
        numberOfLoggedInUsers++;
        loggedInUser.push(name);
    }

    if (users[name].points >= 50) {
        numberOfHighPointsUser++;
        highPointsUser.push(name);
    }
}

console.log(`There are ${numberOfLoggedInUsers} people logged in`);
console.log(loggedInUser);
console.log(`There are ${numberOfHighPointsUser} people have more than or equal 50 points`);
console.log(highPointsUser);

