// Key Takeaways

// 1. Operator Precedence

/* 
  <=, <, >, >= - Comparison
  ===, !==, ==, != - Equality
  && - Logical AND
  || - Logical OR
*/

// 2. Ternary Operator - can treat entire exp as variable

let message = 1 == 1 ? 'this is true' : 'this is not true'
console.log(message); // ==> this is true

// 3. Switch Statements
// note: use break to avoid fall through, but fall through can be useful for multiple cases w/ same behavior

let a = 5;
switch(a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
}

let b = 5;

switch (b) {
  case 5:
  case 6:
  case 7:
    // executed if a is 5, 6, or 7
    console.log("b is either 5, 6, or 7");
    break;
  case 8:
  case 9:
    // executed if a is 8 or 9
    console.log('b is 8 or 9');
    break;
  default:
    // executed if a is anything else
    console.log('b is not 5, 6, 7, 8, or 9');
    break;
}
