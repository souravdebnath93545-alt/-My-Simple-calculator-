const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Error: Division by zero"
};

// --- Testing the calculator ---
console.log("Add: 10 + 5 =", calculator.add(10, 5));
console.log("Subtract: 10 - 5 =", calculator.subtract(10, 5));
console.log("Multiply: 10 * 5 =", calculator.multiply(10, 5));
console.log("Divide: 10 / 5 =", calculator.divide(10, 5));
console.log("Divide by zero:", calculator.divide(10, 0));
