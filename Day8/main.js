const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki'
    },
    getPersonInfo: function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
    }
};

const myObject = {
    skills: ['html', 'css', 'js'],
    name: {},


};
myObject.name.lastName = 'Dao Dinh';
myObject.name.firstName = 'Huong';
myObject.skills.push('bootstrap');
myObject.location = 'VietNam';

console.log(myObject);
console.log(person.getPersonInfo());