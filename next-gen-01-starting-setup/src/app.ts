
// Rest parameters example
// ...numbers: number[number, number, number, ...]
// if we want to pass a set amount of numbers to a function we use the above syntax
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);


// Array & Object destructuring
const hobbies = ['Sports', 'Cooking', 'Reading'];

const person = { 
    firstName: 'Max',
    age: 32
};

// Destructuring arrays
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
// Destructuring objects
const { firstName, age } = person;