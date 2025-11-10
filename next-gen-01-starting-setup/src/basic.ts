// Usual way of defining a class in TypeScript
/* class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
} */

// Shorter way using parameter properties
class User {
    // By adding access modifiers to the constructor parameters
    // we can automatically create and initialize class properties
    constructor(public name: string, public age: number) {} // age?: number can be optional
}

const max = new User('Max', 32);
const jane = new User('Jane', 28);

console.log(max, jane);