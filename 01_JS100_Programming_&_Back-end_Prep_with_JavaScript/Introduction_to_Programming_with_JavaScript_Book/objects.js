// Key Takeaways

// 1. Basics
  // A. Dot vs Bracket Notation: Bracket useful when key in variable
    // coerces non string key to string (ex. 1 and '1' or true and 'true' same key)
  // B. Can add/assign new fields on the fly
  // C. 'delete' to remove something (ex. delete person.age); returns bool status ; could be false if non-configurab
  // D. const declaration: can't change obj var refers to, can modify obj props and prop vals
  // E. Object.freeze() : freeze prop values of obj (like arrs), only works one level deep
  // F. Prim values always immutable ; no parts to change ; atomic ; indivisible

// 2. Prototypes
  // a inherits from b ==> b is prototype of a ==> a has those fields without defining them
    // Object.create() : create new obj with prototype
    // note: printing obj will only show own props, not prototype props ; SO don't use as a copy, just accessiblity

let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // ==> Bob
console.log(studentBob); // ==> { year: 'Senior'}

// 3. Iteration on Objects
  // A. for/in loop : iterate over with keys
    // note: iterated over props of obj's prototypes ; use hasOwnProperty to distinctify
  // B. Object.keys: return obj keys as array
    // note: returns own keys, not prototype obj keys
    // only rely on iteration order (as added), when keys alphabetic

{
  let person = {
    name: 'Bob',
    age: 30,
    height: '6 ft'
  };

  for(let prop in person) {
    console.log(person[prop]);
  }
}

{
  let obj1 = { a: 1, b: 2 }
  let obj2 = Object.create(obj1);
  obj2.c = 3;
  obj2.d = 4;

  for(let prop in obj2) {
    if(obj2.hasOwnProperty(prop)) {
      console.log(obj2[prop]);
    }
  }
}
  
{
  let person = {
    name: 'Bob',
    age: 30,
    height: '6 ft'
  };

  let personKeys = Object.keys(person);
  console.log(personKeys);
  personKeys.forEach(key => {
    console.log(person[key]);
  });
}

// 4. Common Operations
  // A. Object.keys()
  // B. Object.values()
  // C. Object.entries(): nested array with key-val pairs
  // D. Object.assign(): merge 2+ objects
    // mutates first object
    // use empty obj as first param to create new obj
    // returns first obj

{
  // B
  let person = { name: 'Bob', age: 30, height: '6ft' };
  let personVals = Object.values(person);
  console.log(personVals); // ==> [ 'Bob', 30, '6ft' ]
  
  // C
  console.log(Object.entries(person)); // ==> [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]

  // D
  let objA = { a: 'foo' };
  let objB = { b: 'bar' };
  let retVal = Object.assign(objA, objB);
  console.log(retVal); // ==> { a: 'foo', b: 'bar' }
  console.log(objA); // ==> { a: 'foo', b: 'bar' }
  console.log(retVal === objA); // ==> true
}

// 5. Objects vs Arrays
  // individual val names ==> obj
  // order matters ==> arr
  // stack or queue structure ==> queue


// * : Exercises

{ // A. create array from keys of obj, keys converted to uppercase, must not mutate obj
  // Note: for/in WITH hasOwnProperty OR Object.keys() with map (or with forEach, more work)
  let obj = { b: 2, a: 1, c: 3 };
  console.log(upperCaseKeys(obj));

  function upperCaseKeys(obj) {
    let objKeys = Object.keys(obj);
    return objKeys.map((key) => key.toUpperCase());
  }
}

{ // B. new obj from prototype
  let myProtoObj = { foo: 1, bar: 2 }
  let newObj = Object.create(myProtoObj);
}

{ // C. func that creates and returns copy of obj ; two args ; obj and array of keys to copy ;
    // should let you omit second arg, if not present, copy all existing keys from obj
    // note: Object.create() vs Object.assign() : use assign for true copy and printing all props

    let objToCopy = { foo: 1, bar: 2, qux: 3 }
    
    let newObj = copyObj(objToCopy);
    console.log(newObj);  // => { foo: 1, bar: 2, qux: 3 }

    let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
    console.log(newObj2); // => { foo: 1, qux: 3 }

    let newObj3 = copyObj(objToCopy, ['bar']);
    console.log(newObj3); // => { bar: 2 }

    function copyObj(sourceObj, keys) { // empty array? optional?
      // Note: values not passed = undefined
      // Personal Style Notes: 
        // - declare return val, modify, return for consistency/easy debugging ; minimize scattered new prims/objs
        // - source/dest vs obj/newObj
      
      let destinationObj = {};

      if(!keys) return Object.assign(destinationObj, sourceObj);

      keys.forEach((key) => destinationObj[key] = sourceObj[key]);
      return destinationObj;
    }
}

{ // D. Code Review
    // Note: variable reassignment doesn't change original obj
    // Note: prims like string not mutable anyway

    let foo = { a: 'hello', b: 'world' };
    let qux = 'hello';
    
    function bar(argument1, argument2) {
      argument1.a = 'hi';
      argument2 = 'hi';
    }
    
    bar(foo, qux);
    
    console.log(foo.a); // ==> hi
    console.log(qux);   // ==> hello (unchanged)
}

// Questions
  // 1. Equiv of stacks, queues, hashmaps, sets in js vs java?