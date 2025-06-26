function calculator(a: number, b: number, operation: string): number | string {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}

console.log(calculator(10, 5, "add")); // Output: 15
console.log(calculator(10, 0, "divide"));