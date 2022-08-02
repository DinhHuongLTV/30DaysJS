let myFirstName = "Huong Dao";
let myLastName = "Dao Dinh Huong";
let isFirstLonger = myFirstName.length > myLastName.length;

console.log(`Your ${isFirstLonger ? 'first' : 'last'} name, ${isFirstLonger ? myFirstName : myLastName} is longer than your ${isFirstLonger ? 'last' : 'first'} name, ${isFirstLonger ? myLastName : myFirstName}`);
