const leapYearChecker = (year) => {
    if ((year % 4 == 0 && year % 100 != 0) || year % 100 == 0) return true;
    else return false;
};

function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}


let month = prompt(`Enter month: `);
let year = Number(prompt(`Enter year: `));
let leapYear = leapYearChecker(year);
const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

temp = month.toLowerCase();
indexOfMonth = months.indexOf(temp);
console.log(indexOfMonth);
console.log(months[indexOfMonth] === months[1]);
console.log(leapYear);
if (months[indexOfMonth] === months[1] && leapYear == true)
    daysOfMonth[indexOfMonth] += 1;

if (indexOfMonth != -1) {
    console.log(`${capitalize(months[indexOfMonth])} has ${daysOfMonth[indexOfMonth]} days`);
} else {
    console.log(`Invalid input`);
}



