const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (shoppingCart.includes('Meat')) {
    console.log(`Meat has already been added`);
} else {
    shoppingCart.unshift(`Meat`);
    alert(`Meat has been added`);
}

if (shoppingCart.includes(`Sugar`)) {
    console.log(`Sugar has already been added`);
} else {
    shoppingCart.push(`Sugar`);
    alert(`Sugar has been added`);
}
let isAllergic = confirm(`Are you allergic to honey`);

if (isAllergic) {
    let indexHoney = shoppingCart.indexOf(`Honey`);
    shoppingCart.splice(indexHoney, 1);
    alert(`Honey has been removed`);
}

let indexTea = shoppingCart.indexOf(`Tea`);
shoppingCart[indexTea] = `Green Tea`;

console.log(shoppingCart);

