const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

const multiply = (a: number, b: number): number => {
    return a * b;
};

const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

console.log(add(10, 5)); // Output: 15
console.log(subtract(15, 3)); // Output: 12
console.log(multiply(4, 6)); // Output: 24
console.log(divide(8, 2)); // Output: 4
