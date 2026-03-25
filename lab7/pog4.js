const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

const add2 = (n) => n + 2;
const multiply3 = (n) => n * 3;
const square = (n) => n * n;

const composed = compose(square, multiply3, add2);
const piped = pipe(add2, multiply3, square);

console.log("Compose Result:", composed(2)); 
console.log("Pipe Result:", piped(2));       