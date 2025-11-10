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
var User = /** @class */ (function () {
    // By adding access modifiers to the constructor parameters
    // we can automatically create and initialize class properties
    function User(name, age) {
        this.name = name;
        this.age = age;
    } // age?: number can be optional
    return User;
}());
var max = new User('Max', 32);
var jane = new User('Jane', 28);
console.log(max, jane);
