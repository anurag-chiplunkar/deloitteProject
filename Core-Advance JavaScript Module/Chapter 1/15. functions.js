// Functions
// Quite often we need to perform a similar action in many places of the script.

// For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.

// Function Declaration
// To create a function we can use a function declaration.

// It looks like this:

function showMessage() {
  alert( 'Hello everyone!' );
}

function name(parameter1, parameter2, ... parameterN) {
    // body
}

function showMessage() {
    alert( 'Hello everyone!' );
}
  
showMessage();
showMessage();

// Local variables
// A variable declared inside a function is only visible inside that function.

// For example:

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function


// Outer variables
// A function can access an outer variable as well, for example:

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John


// The function has full access to the outer variable. It can modify it as well.

// For instance:

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function



let userName = 'John';

function showMessage(name) {
  let hello = name
  hello = userName

  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(hello)
  alert(message);
}

// the function will create and use its own userName
showMessage("Bob");

alert( userName ); // John, unchanged, the function did not access the outer variable


// Global variables
// Variables declared outside of any function, such as the outer userName in the code above, are called global.

// Global variables are visible from any function (unless shadowed by locals).

// It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.


// Parameters
// We can pass arbitrary data to functions using parameters.

// In the example below, the function has two parameters: from and text.

function showMessage(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)



function showMessage(dom, text) {

     from = '*' + dom + '*'; // make "from" look nicer
  
    alert( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage(from, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
  alert( from ); // Ann


// Default values
// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

// For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

showMessage("Ann");


// That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.

function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
  }
  
showMessage("Ann"); // Ann: no text given


// Returning a value
// A function can return a value back into the calling code as the result.

// The simplest example would be a function that sums two values:

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3


// The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).

// There may be many occurrences of return in a single function. For instance:

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}


// It is possible to use return without a value. That causes the function to exit immediately.

// For example:

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}


// Naming a function
// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.


showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false


// One function – one action
// A function should do exactly what is suggested by its name, no more.

// Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).


