const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let userInput = prompt('Enter month: ');
let temp = userInput.toLowerCase();
let indexOfMonth = months.indexOf(temp);

if (indexOfMonth != -1) {
    console.log(`${capitalize(months[indexOfMonth])} has ${daysOfMonth[indexOfMonth]} days`);
} else {
    console.log(`Invalid input`);
}

function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

