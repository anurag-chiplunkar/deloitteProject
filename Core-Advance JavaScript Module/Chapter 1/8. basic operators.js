// Terms: “unary”, “binary”, “operand”
// Before we move on, let’s grasp some common terminology.

// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values


// Remainder %
// The remainder operator %, despite its appearance, is not related to percents.

// The result of a % b is the remainder of the integer division of a by b.

// For instance:
alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
alert( 8 % 3 ); // 2, a remainder of 8 divided by 3


// Exponentiation **
// The exponentiation operator a ** b raises a to the power of b.

// In school maths, we write that as ab.

// For instance:
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

// A square root is an exponentiation by ½:

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


// String concatenation with binary +
// Let’s meet features of JavaScript operators that are beyond school arithmetics.

// Usually, the plus operator + sums numbers.

// But, if the binary + is applied to strings, it merges (concatenates) them:
let s = "my" + " string";
alert(s); // mystring
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"
alert( 6 - '2' ); // 4, converts '2' to a number

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
alert( '6' / '2' ); // 3, converts both operands to numbers


// Numeric conversion, unary +
// The plus + exists in two forms: the binary form that we used above and the unary form.

// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// Assignment
let x = 2 * 2 + 1;

alert( x ); // 5

// Chaining assignments
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4


// Modify-in-place
let n = 2;
n = n + 5;
n = n * 2;
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14


// Increment/decrement
// Increasing or decreasing a number by one is among the most common numerical operations.

// Increment ++ increases a variable by 1:
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

// Decrement -- decreases a variable by 1:
let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

// The operators ++ and -- can be placed either before or after a variable.

// When the operator goes after the variable, it is in “postfix form”: counter++.
// The “prefix form” is when the operator goes before the variable: ++counter.


// In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2


// In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.
let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1


// If the result of increment/decrement is not used, there is no difference in which form to use:
let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same


// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let counter = 0;
alert( ++counter ); // 1


// If we’d like to increment a value but use its previous value, we need the postfix form:
let counter = 0;
alert( counter++ ); // 0