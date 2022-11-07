// Type Conversions
// Most of the time, operators and functions automatically convert the values given to them to the right type.

// For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

// There are also cases when we need to explicitly convert a value to the expected type.

// String Conversion
// String conversion happens when we need the string form of a value.

// For example, alert(value) does it to show the value.

// We can also call the String(value) function to convert a value to a string:

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string


// Numeric Conversion
// Numeric conversion happens in mathematical functions and expressions automatically.

alert( "6" / "2" ); // 3, strings are converted to numbers
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

// Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.

// Boolean Conversion
// Boolean conversion is the simplest one.

// It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

// The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.


alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

// Please note: the string with zero "0" is true
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)




// String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

// Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

// Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

// Most of these rules are easy to understand and memorize. The notable exceptions where people usually make mistakes are:

// undefined is NaN as a number, not 0.
// "0" and space-only strings like " " are true as a boolean.