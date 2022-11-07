// Logical operators
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article.

// Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.


// || (OR)
// The “OR” operator is represented with two vertical line symbols:

result = a || b;
// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// As we can see, the result is always true except for the case when both operands are false.

// If an operand is not a boolean, it’s converted to a boolean for the evaluation.

// For instance, the number 1 is treated as true, the number 0 as false:

if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
  }

// Most of the time, OR || is used in an if statement to test if any of the given conditions is true.

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

// OR "||" finds the first truthy value
result = value1 || value2 || value3;


alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

// Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder


// && (AND)
// The AND operator is represented with two ampersands &&:
result = a && b;

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}


if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );
  }


// AND “&&” finds the first falsy value

result = value1 && value2 && value3;

// The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.

// The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

alert( 1 && 2 && null && 3 ); // null

alert( 1 && 2 && 3 ); // 3, the last one


// Precedence of AND && is higher than OR ||

// ! (NOT)
// The boolean NOT operator is represented with an exclamation sign !.

result = !value;

// The operator accepts a single argument and does the following:

// Converts the operand to boolean type: true/false.
// Returns the inverse value.

alert( !true ); // false
alert( !0 ); // true

// A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false