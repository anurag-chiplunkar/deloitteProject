// Error handling, "try...catch"
// No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an unexpected user input, an erroneous server response, and for a thousand other reasons.

// Usually, a script “dies” (immediately stops) in case of an error, printing it to console.

// But there’s a syntax construct try...catch that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.

// The “try…catch” syntax
// The try...catch construct has two main blocks: try, and then catch:

try {

  // code...

} catch (err) {

  // error handling

}
// It works like this:

// First, the code in try {...} is executed.
// If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch.
// If an error occurs, then the try execution is stopped, and control flows to the beginning of catch (err). The err variable (we can use any name for it) will contain an error object with details about what happened.


// So, an error inside the try {...} block does not kill the script – we have a chance to handle it in catch.

// Let’s look at some examples.
// An errorless example: shows alert (1) and (2):

try {

  alert('Start of try runs');  // (1) <--

  // ...no errors here

  alert('End of try runs');   // (2) <--

} catch (err) {

  alert('Catch is ignored, because there are no errors'); // (3)

}


// An example with an error: shows (1) and (3):

try {

  alert('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  alert('End of try (never reached)');  // (2)

} catch (err) {

  alert(`Error has occurred!`); // (3) <--

}


// -----------------------------------------------------

// try...catch only works for runtime errors
// For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript.

// It won’t work if the code is syntactically wrong, for instance it has unmatched curly braces:

try {
  {{{{{{{{{{{{
} catch (err) {
  alert("The engine can't understand this code, it's invalid");
}
// The JavaScript engine first reads the code, and then runs it. The errors that occur on the reading phase are called “parse-time” errors and are unrecoverable (from inside that code). That’s because the engine can’t understand the code.

// So, try...catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.

// -----------------------------------------------

// try...catch works synchronously
// If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:

try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert( "won't work" );
}
// That’s because the function itself is executed later, when the engine has already left the try...catch construct.

// To catch an exception inside a scheduled function, try...catch must be inside that function:

setTimeout(function() {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert( "error is caught here!" );
  }
}, 1000);

// ---------------------------------------------------------

// Error object
// When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch:

try {
  // ...
} catch (err) { // <-- the "error object", could use another word instead of err
  // ...
}
// For all built-in errors, the error object has two main properties:

// name
// Error name. For instance, for an undefined variable that’s "ReferenceError".
// message
// Textual message about error details.
// There are other non-standard properties available in most environments. One of most widely used and supported is:

try {
    lalala; // error, variable is not defined!
  } catch (err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
  }

// ------------------------------------------------


// Optional “catch” binding
// A recent addition
// This is a recent addition to the language. Old browsers may need polyfills.
// If we don’t need error details, catch may omit it:

try {
  // ...
} catch { // <-- without (err)
  // ...
}

// -------------------------------------------

// Using “try…catch”
// Let’s explore a real-life use case of try...catch.

// As we already know, JavaScript supports the JSON.parse(str) method to read JSON-encoded values.

// Usually it’s used to decode data received over the network, from the server or another source.

// We receive it and call JSON.parse like this:

let json = '{"name":"John", "age": 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object

// now user is an object with properties from the string
alert( user.name ); // John
alert( user.age );  // 30

// You can find more detailed information about JSON in the JSON methods, toJSON chapter.

// If json is malformed, JSON.parse generates an error, so the script “dies”.

// Should we be satisfied with that? Of course not!

// This way, if something’s wrong with the data, the visitor will never know that (unless they open the developer console). And people really don’t like when something “just dies” without any error message.

// Let’s use try...catch to handle the error:

let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( err.name );
  alert( err.message );
}
// Here we use the catch block only to show the message, but we can do much more: send a new network request, suggest an alternative to the visitor, send information about the error to a logging facility, … . All much better than just dying.

// ----------------------------------------------

// Throwing our own errors
// What if json is syntactically correct, but doesn’t have a required name property?

// Like this:

let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors
  user.name; // no name!

} catch (err) {
  alert( "doesn't execute" );
}
// Here JSON.parse runs normally, but the absence of name is actually an error for us.

// To unify error handling, we’ll use the throw operator.

// ----------------------------------------------


// “Throw” operator
// The throw operator generates an error.

// The syntax is:

// throw <error object>
// Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).

// JavaScript has many built-in constructo, TypeError and others. We can use them to crears for standard errors: Error, SyntaxError, ReferenceErrorte error objects as well.

// Their syntax is:

let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...

// For built-in errors (not for any objects, just for errors), the name property is exactly the name of the constructor. And message is taken from the argument.

// For instance:

let error = new Error("Things happen o_O");

alert(error.name); // Error
alert(error.message); // Things happen o_O

// Let’s see what kind of error JSON.parse generates:

try {
  JSON.parse("{ bad json o_O }");
} catch (err) {
  alert(err.name); // SyntaxError
  alert(err.message); // Unexpected token b in JSON at position 2
}

// As we can see, that’s a SyntaxError.

// And in our case, the absence of name is an error, as users must have a name.

// So let’s throw it:

let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}
// In the line (*), the throw operator generates a SyntaxError with the given message, the same way as JavaScript would generate it itself. The execution of try immediately stops and the control flow jumps into catch.

// Now catch became a single place for all error handling: both for JSON.parse and other cases.


// -----------------------------------------------------

// try…catch…finally
// Wait, that’s not all.

// The try...catch construct may have one more code clause: finally.

// If it exists, it runs in all cases:

// after try, if there were no errors,
// after catch, if there were errors.
// The extended syntax looks like this:

try {
   ... try to execute the code ...
} catch (err) {
   ... handle errors ...
} finally {
   ... execute always ...
}

// Try running this code:

try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
// The code has two ways of execution:

// If you answer “Yes” to “Make an error?”, then try -> catch -> finally.
// If you say “No”, then try -> finally.
// The finally clause is often used when we start doing something and want to finalize it in any case of outcome.

// For instance, we want to measure the time that a Fibonacci numbers function fib(n) takes. Naturally, we can start measuring before it runs and finish afterwards. But what if there’s an error during the function call? In particular, the implementation of fib(n) in the code below returns an error for negative or non-integer numbers.

// The finally clause is a great place to finish the measurements no matter what.

// Here finally guarantees that the time will be measured correctly in both situations – in case of a successful execution of fib and in case of an error in it:

let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert( `execution took ${diff}ms` );
// You can check by running the code with entering 35 into prompt – it executes normally, finally after try. And then enter -1 – there will be an immediate error, and the execution will take 0ms. Both measurements are done correctly.

// In other words, the function may finish with return or throw, that doesn’t matter. The finally clause executes in both cases.

// Variables are local inside try...catch...finally
// Please note that result and diff variables in the code above are declared before try...catch.

// Otherwise, if we declared let in try block, it would only be visible inside of it.

// finally and return
// The finally clause works for any exit from try...catch. That includes an explicit return.

// In the example below, there’s a return in try. In this case, finally is executed just before the control returns to the outer code.

function func() {

  try {
    return 1;

  } catch (err) {
    /* ... */
  } finally {
    alert( 'finally' );
  }
}

alert( func() ); // first works alert from finally, and then this one
// try...finally
// The try...finally construct, without catch clause, is also useful. We apply it when we don’t want to handle errors here (let them fall through), but want to be sure that processes that we started are finalized.

function func() {
  // start doing something that needs completion (like measurements)
  try {
    // ...
  } finally {
    // complete that thing even if all dies
  }
}

// In the code above, an error inside try always falls out, because there’s no catch. But finally works before the execution flow leaves the function.



