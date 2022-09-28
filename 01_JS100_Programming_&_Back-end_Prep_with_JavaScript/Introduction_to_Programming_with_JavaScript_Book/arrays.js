// Key Takeaways

// 1. push, pop, concat (immutable)
// 2. splice(starting index, # of elements to remove, returns removed elements and mutates original array)
{
  let array = [1, 4, 3, 10, 'a', null];
  array.splice(3,2); // ==> output: [ 10, 'a' ] ; array: [ 1, 4, 3, null ]
}

// 3. map: to transform arrays ; new array based on existing array
  // note: unlike forEach, if executed twice, won't result in two sets of values in array
  // diff: forEach simple iteration and returns undefined ; map transforms elements and returns new array
{
  let numbers = [1, 2, 3, 4]
  let squares = numbers.map(num => num * num); // ==> [ 1, 4, 9, 16 ]
  squares = numbers.map(num => num * num); // ==> squares unchanged
}

// 4. filter: new array including all elems from calling arr that return truthy value
{
  let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
  numbers2.filter(number2 => number2 > 4); // output: [ 5, 6, 7, 8, 9, 10 ] ; numbers2: unchanged
}

// 5. reduce: reduce contents of arr to single value
  // 2 args: callback func, value to init accumulator ; 
  // callback func takes 2 args: curr val of accumulator and elem from array ; returns next accum
  // note: if no init accum provided, first elem used as init accum, iteration starts at next elem
{
  let arr = [2, 3, 5, 7]
  arr.reduce((accum, elem) => accum + elem, 0); // ==> returns sum
  arr.reduce((accum, elem) => accum * elem, 1); // == returns product

  let strings = ['a', 'b', 'c', 'd'];
  let transformedStrings = strings.reduce((accum, elem) => {
    return accum + elem.toUpperCase();
  }, '');
  console.log(transformedStrings); // ==> 'ABCD'
}

// 6. Quirks / Odd Behavior
  // A. Arrays are objects, typeof returns 'object' not 'array'; use Array.isArray
  // B. Can change length property: smaller => array truncated ; larger => larger but not initialized
  // C. Can create array "elements" with indexes that use negative/non-int/non-num values
      // These aren't true elements ; they are properties on array object ; only index vals count toward length
      // Object.keys : returns array keys including weird ones
        // Does not count unset values (show up as empty until used, then undefined) ; unlike arr.length
{
  let arr2 = [1, 2, 3];
  arr2[-3] = 4;
  arr2[3.1415] = 'pi';
  arr2["cat"] = 'Fluffy';
  console.log(arr2); // ==> [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
  console.log(arr2.length); // ==> 3

  console.log(Object.keys(arr2)); // ==> [ '0', '1', '2', '-3', '3.1415', 'cat' ]
}

{
  let a = new Array(3); // ==> [ <3 empty items> ]
  a[0] === undefined; // ==-> true
  let b = [];
  b.length = 3; // ==> b: [ <3 empty items> ]
  b[0] === undefined; // ==> true
  let c = [undefined, undefined, undefined];
  c[0] === undefined; // ==> true

  let aKeys = Object.keys(a); // ==> a.length: 3 ; aKeys.length = 0;
  let bKeys = Object.keys(b); // ==> b.length: 3 ; bKeys.length = 0;
  let cKeys = Object.keys(c); // ==> c.length: 3 ; cKeys.length = 3;
}

// 7. Array Equality: only equal if same array (same spot in memory), just like obj equality
  // [1, 2, 3] === [1, 2, 3] ==> false
  // let a = [1, 2, 3]; let b = a; a === b ==> true

// 8. Other Array Methods
  // A. includes: determines whether array includes given elem
    // Note: uses === ; works good with prim elems, careful with objs and arrays
  // B. sort
  // C. slice: extracts and returns portion of array
    // 2 opt args: index which extraction begins, where extraction ends (exclusive)
    // only first arg: returns rest of array ; no args: returns copy of array
    // note: [ES6] new way to copy array with spread operator: clone = [...sheeps];
  // D. reverse

// * : Exercises

{ // A. return even vals
  let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
  let evenNumbers = myArray.filter((elem) => elem % 2 === 0); // could use forEach too
  evenNumbers.forEach((elem) => console.log(elem));
}

{ // B. return even vals
  let myArray = [[1, 3, 6, 11], [4, 2, 4], [9, 17, 16, 0]];
  myArray.forEach((nestedArray) => {
    nestedArray.forEach((value) => {
      if(value % 2 === 0) console.log(value);
    })
  });
}

{ // C. return whether odd or even
  let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
  let evenOddArray = myArray.map((elem) => elem % 2 === 0 ? 'even' : 'odd');
  console.log(evenOddArray);
}

{ // D. return integers
  let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
  let integers = findIntegers(things);
  console.log(integers); // ==> [ 1, 3, -4 ]

  function findIntegers(array) {
    return array.filter((elem) => Number.isInteger(elem));
  }
}

{ // E. determine length of strings, discard even lengths, use map + filter
  let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
  console.log(oddLengths(arr)); // ==> [ 1, 5, 3 ]

  function oddLengths(arr) {
    let lengths = arr.map((elem) => elem.length);
    return lengths.filter((elem) => elem % 2 === 1);
  }
}

{ // F. sum of squares of all nums in arr (reduce)
  let array = [3, 5, 7];
  console.log(sumOfSquares(array)); // => 83

  function sumOfSquares(array) {
    return array.reduce((accum, elem) => accum + (elem * elem), 0);
  }
}

{
  // G. oddLengths like E, only use reduce
  let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
  console.log(oddLengths(arr)); // ==> [ 1, 5, 3 ]
  
  function oddLengths(arr) {
    return arr.reduce((resultArr, elem) => {
      if(elem.length % 2 === 1) {
        resultArr.push(elem.length);
      }

      return resultArr; // NOTE: DON'T FORGET TO RETURN ACCUM VALUE when multi-line
    }, []);
  }
}

// Questions
  // 1. When would you use arrow operator vs. function expression
    // https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
  // 2. Spread operator
  // 3. Using js vs java in interviews