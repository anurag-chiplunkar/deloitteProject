// Loops: while and for
// We often need to repeat actions.

// For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

// Loops are a way to repeat the same code multiple times.

// The “while” loop
// The while loop has the following syntax:

while (condition) {
  // code
  // so-called "loop body"
}


// While the condition is truthy, the code from the loop body is executed.

// For instance, the loop below outputs i while i < 3:

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

// Curly braces are not required for a single-line body
// If the loop body has a single statement, we can omit the curly braces {…}:

let i = 3;
while (i) alert(i--);


// The “do…while” loop
// The condition check can be moved below the loop body using the do..while syntax:

do {
  // loop body
} while (condition);
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

// For example:

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

// The “for” loop
// The for loop is more complex, but it’s also the most commonly used loop.

// It looks like this:

for (begin; condition; step) {
  // ... loop body ...
}
// Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

// Skipping parts
// Any part of for can be skipped.

// For example, we can omit begin if we don’t need to do anything at the loop start.

// Like here:

let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}


// We can also remove the step part:

let i = 0;

for (; i < 3;) {
  alert( ++i );
}


// We can actually remove everything, creating an infinite loop:
// Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error.

for (;;) {
  // repeats without limits
}


// Breaking the loop
// Normally, a loop exits when its condition becomes falsy.

// But we can force the exit at any time using the special break directive.

// For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;
  console.log(sum)

}
alert( 'Sum: ' + sum );
// The break directive is activated at the line (*) if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.


// Continue to the next iteration
// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

// We can use it if we’re done with the current iteration and would like to move on to the next one.

// The loop below uses continue to output only odd values:

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
// For even values of i, the continue directive stops executing the body and passes control to the next iteration of for (with the next number). So the alert is only called for odd values.


