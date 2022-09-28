let rlSync = require('readline-sync');

// Key takeaways

// 1. default function param values

function say(words = "hello") {
  console.log(words + "!");
}

say("Howdy");
say();

// 2. nested functions possible, scoped

// 3. mutating vs non-mutating methods + functions
  // note: mutation concern when dealing with arrays and objects.
  // note: primitive values immutable - operations always return new values
  // note: pass-by-value for primitives, pass-by-reference with objs and arrays

let name = "Pete Hanson";
console.log(name.toUpperCase()); // => 'PETE HANSON'
console.log(name);               // => 'Pete Hanson'

let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop();
console.log(oddNumbers); // => [1, 3, 5, 7]

function changeFirstElement(array) {
  array[0] = 9;
}
let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive); // => [9, 2, 3, 4, 5]

function addToArray(array) {
  return array.concat(10);
}
let oneToFive2 = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive2)); // => [1, 2, 3, 4, 5, 10]
console.log(oneToFive2);             // => [1, 2, 3, 4, 5]

// 4. Three ways to define functions: function declaration, function expression, arrow function
  // note: js functions are 'first-class functions', can be treated as objs

// A. function declaration (above)
// B. function expression
  // note: key diff: cannot invoke before it appears in program, unlike A

let greetPeople = function() {
  console.log("Good Morning!");
}
greetPeople();

// ex. higher-order function
function makeGreeter(name) {
  return function greeter() {
    console.log(`Hello ${name}`);
  };
}

// C. arrow function
  // note: implicit returns: can omit return ONLY when func body contains single expression
    // otherwise: brackets and return statement

let greetPeopleArrow = () => console.log("Good Morning!");
greetPeopleArrow();
let add = (a,b) => a + b;

let getNumber = (text) => {
  let input = rlSync.question(text);
  return Number(input);
};

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));


