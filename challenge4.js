'use strict';

////////////////////////
// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):

// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):

// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// Hints:

// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//////////

// reduce all to lower case

const inputUppercase = 'underscore_case';

const inputLowercase = inputUppercase.toLowerCase();
console.log(inputLowercase);

// seperate names

console.log(inputLowercase.split('_'));

const [firstWord, lastWord] = inputLowercase.split('_');

console.log(`${firstWord}${lastWord}`);

// capitalise first letter of second word

const capitaliseWord = function (word) {
  const words = word.split('_');
  const wordsUpper = [];

  for (const n of words) {
    wordsUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(wordsUpper.join(''));
};

capitaliseWord(`${lastWord}`);

///

const abc = [firstWord, lastWord[0].toUpperCase()].join('');
console.log(abc);

// join words

// count length of line +1 for new line

// add tick emoji at the end

// add padding of "." between name and tick emoji
