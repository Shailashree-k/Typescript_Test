/* const message: string = "Hello, TypeScript!";
console.log(message);*/

let message = "Hello, JavaScript!";
console.log(message);

class Person {
    // Constructor to initialize properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display a greeting
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Method to update the age
    haveBirthday() {
        this.age += 1;
        console.log(`Happy Birthday! ${this.name} is now ${this.age} years old.`);
    }
}

// Create objects (instances) of the class
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Call methods on the objects
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.