function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Деление на ноль невозможно");
  }
  return a / b;
}

function isEven(n) {
  return n % 2 === 0;
}

module.exports = { sum, multiply, divide, isEven };