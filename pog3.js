const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evenNumbers = numbers.filter(n => n % 2 === 0);

const sum = numbers.reduce((total, n) => total + n, 0);

console.log("Original Array:", numbers);
console.log("Doubled:", doubled);
console.log("Even Numbers:", evenNumbers);
console.log("Sum:", sum);

