// Key Takeaways

// 1. Pre/post increment
  // note: both increment variable but diff in what gets returned by expression
  // ex. a = 5 ; a++ ==> 5; ++a ==> 6

// 2. 'continue' useful to avoid nested ifs

/* Example

for (let i = 0; i < someNumber; i += 1) {
  if (someCondition) {
    // some code here
    if (anotherCondition) {
      // some more code here
    }
  }
}

for (let i = 0; i < someNumber; i += 1) {
  if (!someCondition) continue;
  // some code here

  if (!anotherCondition) continue;
  // some more code here
}

*/

// 3. Array Iteration with forEach

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
});

// note: more concise forEach with arrow function
names.forEach(name => console.log(name));

// 4. Recursion

function doubler(x) {
  console.log(x);

  if(x < 50) {
    doubler(x * 2);
  }
}

doubler(5);

function fib(x) {
  if(x === 0 || x === 1) return x;

  return fib(x - 1) + fib(x - 2);
}
console.log(fib(5));

// 5. Interesting example with Math
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}