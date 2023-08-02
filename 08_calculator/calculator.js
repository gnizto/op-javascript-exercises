const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const sum = function (numbers) {
  let total = 0;

  // if (!numbers) return total;
  numbers.forEach((number) => (total += number));

  return total;
};

const multiply = function (numbers) {
  let total = 1;
  if (!numbers) return 0;
  numbers.forEach((number) => (total *= number));
  return total;
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (number) {
  total = 1;

  for (let i = number; i > 1; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
