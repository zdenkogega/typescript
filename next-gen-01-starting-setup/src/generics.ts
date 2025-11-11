let names: Array<string> = ['Alice', 'Bob', 'Charlie'];

type DataStore<T> = {
    [key: string]: T;
}

let store: DataStore<string | number> = {};
store.age = 30;
store.name = "Alice";

function merge<T>(a:T, b:T) {
    return [a, b];
}

const ids = merge<number>(1, 2); // <> can be omitted as TS can infer types

function merge2<T, U>(a:T, b:U) {
    return [a, b];
}

const ids2 = merge2(1, "Hello");

function mergeObj<T extends object>(a: T, b: T) { // T is constrained to be an object
    return {...a, ...b};
}

const mergedObjects = mergeObj({name: "Alice"}, {age: 30});
console.log(mergedObjects);