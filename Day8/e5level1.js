dog.breed = 'german sheperd';
dog.getFullInfor = function () {
    let statement = `My dog's name is ${this.name}, he is a ${this.breed} and ${this.age} years old`;
    return statement;
};

console.log(dog.getFullInfor());