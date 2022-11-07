// Data types
// A value in JavaScript is always of a certain type. For example, a string or a number.

// There are eight basic data types in JavaScript.

// no error
let message = "hello";
message = 123456;

// Numbers
let n = 123;
n = 12.345;

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.


// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation.

// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

// NaN is sticky. Any further mathematical operation on NaN returns NaN:



alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "not a number" / 2 ); // NaN, such division is erroneous
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN


// BigInt
// In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
// A BigInt value is created by appending n to the end of an integer:

const bigInt = 1234567890123456789012345678901234567890n;

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// String
// A string in JavaScript must be surrounded by quotes.
// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name1 = "John";

// embed a variable
alert( `Hello, ${name1}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3


// Boolean (logical type)
// The boolean type has only two values: true and false.

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")



// The “null” value
// The special null value does not belong to any of the types described above.

// It forms a separate type of its own which contains only the null value:
let age1 = null;
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.


// The “undefined” value
// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is “value is not assigned”.

// If a variable is declared, but not assigned, then its value is undefined:

let age2;

alert(age); // shows "undefined"
let age = 100;

// change the value to undefined
age = undefined;

alert(age); // "undefined"

// We don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.


// The typeof operator
// The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)




// Summary
// There are 8 basic data types in JavaScript.

// Seven primitive data types:
// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// symbol for unique identifiers.
// And one non-primitive data type:
// object for more complex data structures.
// The typeof operator allows us to see which type is stored in a variable.

// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.