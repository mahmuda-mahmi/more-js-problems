// add

function add(num1, num2) {
       console.log('Parameters', num1, num2);
       const sum = num1 + num2;
       return sum;
}

const firstTotal = add(67, 10);
console.log('Total is', firstTotal);
const secondTotal = add(987, 67);
console.log('Total is', secondTotal);

// multiply

function multiply(num1, num2) {
       console.log('Parameters', num1, num2);
       const result = num1 * num2;
       return result;
}

const firstResult = multiply(45, 67);
console.log('Result is', firstResult);
const secondResult = multiply(65, 97);
console.log('Result is', secondResult);