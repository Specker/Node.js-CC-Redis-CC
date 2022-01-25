class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    greeting(){
        console.log(`Hello mr ${this.name} ${this.surname}`)
        console.log(`Your age is ${this.age}`)
    }
}

module.exports = Person;