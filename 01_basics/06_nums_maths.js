const score = 100
console.log(score);

const number = new Number(100)
console.log(number);

console.log(number.toString() . length);
console.log(number.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString());

// ######################### MATHS #################

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(6.1));
console.log(Math.floor(6.9));
console.log(Math.max(6,87,54,234,5));
console.log(Math.min(6,87,54,234,5));
console.log(Math.random());

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min);