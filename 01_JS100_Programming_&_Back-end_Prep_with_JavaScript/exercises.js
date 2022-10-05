// Exercises - Key Takeaways

// 1. Functions

'Captain Ruby'.replace('Ruby', 'JavaScript');

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

function extractLanguage(locale) {
  return locale.split('_')[0];
}

function extractRegion(locale) {
  return locale.split('_')[1].split('.')[0];
}

// 2. Variable Scope

// Variable Shadowing
// const: reference can't be reassigned, but contents of obj can be

// 3. Strings

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

byteSequence.includes('x'); // true

{ // .split, .slice, .push, .join
  let string = 'launch school tech & talk';
  let words = string.split(' ');
  let capitalizedWords = [];

  for (let word of words) {
    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  }

  console.log(capitalizedWords.join(' ')); // 'Launch School Tech & Talk'
}

// 4. Arrays

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.push('geothermal')

energy.shift(); // removes first element ; alt: energy = energy.slice(1) ; alt: energy.splice(0,1);

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

alphabet.split(''); // split into array ; alt: Array.from(alphabet);

// 5. Functions 

let scores = [96, 47, 113, 89, 100, 102];

console.log(scores.filter((score) => score >= 100).length);

{
  let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];

  vocabulary.forEach((innerArray) => {
    innerArray.forEach((value) => console.log(value));
  });

  console.log(typeof vocabulary); // ==> object
  console.log(Array.isArray(vocabulary)); // ==> true
}

{
  let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  console.log(myIncludes(destinations, 'Barcelona')); // ==> true
  console.log(myIncludes(destinations, 'Nashville')); // ==> false

  function myIncludes(array, target) {
    return array.filter((value) => value === target).length > 0
  }

  // ALT: return array.indexOf(target) >= 0; // returns -1 if elem not in array
  // Note: no built in js way to test obj equality, can use libs like lodash
}

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
console.log(passcode.join('-'));

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
while(groceryList.length > 0) {
  let checkedItem = groceryList.shift(); // shift returns value removed
  console.log(checkedItem);
}

function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters**2;

  return bmi.toFixed(2); // rounding to 2 decimal points
}

function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}

// Defining function with arrow function

const template = 'I VERB NOUN.';
let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);
console.log(sentence('like', 'birds'));

let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};

// note: returning obj, parenthesis around it
let initGame2 = () => ({
  level: 1,
  score: 0
});

// 6. Objects

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

console.log(Object.keys(vehicle)); // alt: for(let key in obj) 

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

console.log(Object.entries(person)); // ==> [ [ 'title', 'Duke' ], [ 'name', 'Nukem' ], [ 'age', 33 ] 

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let person2 = Object.fromEntries(nestedArray);
console.log(person2);

// shallow copy of object (prims copy, obj refs)

function clone(obj) {
  return Object.assign({}, obj);
}