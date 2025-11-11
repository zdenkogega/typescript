type User4 = {name: string; age: number};
type User4Keys = keyof User4; // "name" | "age"

let validKey: User4Keys;

validKey = "name"; // OK
validKey = "age";  // OK

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];

    if (val === undefined || val === null) {
        throw new Error("Undefined found or null");
    }

    return val;
}

const data = {id: 1, isStored: false, values: [1, -5, 10]}
const isStored = getProp(data, 'isStored');

const user4: User4 = {name: "Alice", age: 30};

const val = getProp(user4, "name");