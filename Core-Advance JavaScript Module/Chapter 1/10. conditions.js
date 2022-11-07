// Conditional branching: if, '?'
// Sometimes, we need to perform different actions based on different conditions.

// To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.


// The “if” statement
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );


if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
  }


// Boolean conversion
// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.

if (0) { // 0 is falsy
    ...
  }

if (1) { // 1 is truthy
    ...
  }

let cond = (year == 2015); // equality evaluates to true or false

  if (cond) {
    ...
  }


// The “else” clause

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

// Several conditions: “else if”

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

// Conditional operator ‘?’
// Sometimes, we need to assign a variable depending on a condition.

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);


// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

// let result = condition ? value1 : value2;

let accessAllowed = (age > 18) ? true : false;


// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;


// Multiple ‘?’
// A sequence of question mark operators ? can return a value that depends on more than one condition.

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

// Similar to

if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }

