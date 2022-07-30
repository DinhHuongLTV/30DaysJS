// console.log(
//   "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
// ); // line break
// console.log("Days\tTopics\tExercises");
// console.log("Day 1\t3\t5");
// console.log("Day 2\t3\t5");
// console.log("Day 3\t3\t5");
// console.log("Day 4\t3\t5");
// console.log("This is a backslash  symbol (\\)"); // To write a backslash
// console.log('In every programming language it starts with "Hello, World!"');
// console.log("In every programming language it starts with 'Hello, World!'");
// console.log("The saying 'Seeing is Believing' isn't correct in 2020");

// const paragraph =
//   "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too.";

// console.log(paragraph);

// trim
// let string = "   30 Days Of JavaScript   ";

// console.log(string);
// console.log(string.trim(" "));

// let firstName = " Asabeneh ";

// console.log(firstName);
// console.log(firstName.trim()); // still removes spaces at the beginning and the end of the string

// let string2 = `this, is, a, string, separated, by, commma`;
// console.log(string2);
// let arr = string2.split(", ");
// arr[3] = "a";
// console.log(arr);

// let string1 = `t t t t t t t t`;
// console.log(string1.indexOf(" "));

let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.match("love"));
