type Operations = {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
}

type Results<T> = {
    [K in keyof T]: number;
}

let mathOperations: Operations = {
    add(a: number, b:number) {
        return a+b;
    },
    subtract(a: number, b:number) {
        return a-b;
    },
};

let mathResults: Results<Operations> = {
    add: mathOperations.add(5, 3),
    subtract: mathOperations.subtract(5, 3),
}