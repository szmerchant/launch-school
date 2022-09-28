let rlSync = require('readline-sync');

// note: question returns string, resulting in string concat instead of add without coercing
// note: convert to int using Number() or parseInt

let number1 = Number(rlSync.question('Enter the first number\n'));

let number2 = Number(rlSync.question('Enter the second number\n'));

let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);