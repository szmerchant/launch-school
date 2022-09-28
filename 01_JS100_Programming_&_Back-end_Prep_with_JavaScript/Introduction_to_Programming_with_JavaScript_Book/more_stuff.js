// Key Takeaways

// 1. for/in and for/of
  // a. for/in for iterating over keys of obj as strings ; never arrays
  // b. for/of for iterating over values of iterable collection (ex. array, string)

// 2. Regex Basics (RegExp)
  // a. test ; method on RegExp obj ; returns bool ; (ex. /o/.test('bobcat')
    // don't use /g
  // b. match ; method on String ; returns array with matches, null if none
    // /g : global match ; array with each matching substring
    // no /g : single match ; return val for successful match array + additional props + elems diff
      // additional props: index (where match begins), input (copy of orig str), groups ("named groups")
      // arr structure: first elem : entire matched part of str ; additional elems : capture group matches
  // c. test vs match: use test for less perf/mem cost when only need to know whether matched

"bobcat".match(/x/)         // No match ; null

"bobcat".match(/[bct]/g)    // Global match ; [ 'b', 'b', 'c', 't' ]

"bobcat".match(/b((o)b)/)   // Singular match with groups ; [ 'bob', 'ob', 'o', index: 0, input: 'bobcat', groups: undefined ]

// 3. Math Object (ex. Match.sqrt(x), Math.PI, Math.max(1,2,3))

Math.sqrt(36); // ==> 6
Math.PI; 
Math.max(1, 6, 3, 2); // ==> 6

// 4. Dates

let date = new Date('December 25, 2012');
date.getDay(); // ==> 2 ; 0 = Sunday, etc.

// * : Exercises

{ // a. return subarray of words that match regex passed
  let words = [ 'laboratory','experiment','flab','Pans Labyrinth','elaborate','polar bear' ];
  console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

  function allMatches(inputWords, regExp) {
    return inputWords.filter((word) => regExp.test(word));
  }
}

{ // b. NaN is only JS value not === to itself
  let ex1 = NaN;
  let ex2 = 3;
  console.log(isNotANumber(ex1)); // ==> true
  console.log(isNotANumber(ex2)); // ==> false

  function isNotANumber(input) {
    return value !== value;
  }
}

{ // c. find out if -0 w/o Object.is(value, 0) ; note: in JS, 0 === -0
  function isNegativeZero(value) {
    return (value === 0) && (1 / value === -Infinity);
  }
}

{ // d. diff between x++ and x = x + 1
    // 1. y++ coerces value of y to numeric so actual addition
    // 2. post operator: y itself 6 after op but return value is previous y, 5
  let x = "5";
  x = x + 1;  // ==> 51

  let y = "5";
  y++;        // ==> 5
}

// * : Questions / Notes
  // 1. toLocaleDateString
  // 2. libraries: Handlebars and jQuery
  // 3. Babel: ex tool to write with latest lang features and run in less current environment