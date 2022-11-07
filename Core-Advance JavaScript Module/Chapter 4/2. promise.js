// Promise

// The constructor syntax for a promise object is:

let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});

// When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

// resolve(value) — if the job is finished successfully, with result value.
// reject(error) — if an error has occurred, error is the error object.
// So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

// The promise object returned by the new Promise constructor has these internal properties:

// state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
// result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.


// Here’s an example of a promise constructor and a simple executor function with “producing code” that takes time (via setTimeout):

let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});
// We can see two things by running the code above:

// The executor is called automatically and immediately (by new Promise).

// The executor receives two arguments: resolve and reject. These functions are pre-defined by the JavaScript engine, so we don’t need to create them. We should only call one of them when ready.

// After one second of “processing”, the executor calls resolve("done") to produce the result. This changes the state of the promise object:


// That was an example of a successful job completion, a “fulfilled promise”.

// And now an example of the executor rejecting the promise with an error:

let promise = new Promise(function(resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});


// ----------------------------------------


// There can be only a single result or an error
// The executor should call only one resolve or one reject. Any state change is final.

// All further calls of resolve and reject are ignored:

let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});

// The idea is that a job done by the executor may have only one result or an error.

// Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.


// ---------------------------------

// Reject with Error objects
// In case something goes wrong, the executor should call reject. That can be done with any type of argument (just like resolve). But it is recommended to use Error objects (or objects that inherit from Error). The reasoning for that will soon become apparent.

// --------------------------------------------


// Immediately calling resolve/reject
// In practice, an executor usually does something asynchronously and calls resolve/reject after some time, but it doesn’t have to. We also can call resolve or reject immediately, like this:

let promise = new Promise(function(resolve, reject) {
  // not taking our time to do the job
  resolve(123); // immediately give the result: 123
});
// For instance, this might happen when we start to do a job but then see that everything has already been completed and cached.

// That’s fine. We immediately have a resolved promise.


// ------------------------------------------

// The state and result are internal
// The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally for that. They are described below.

// ----------------------------------------------

// Consumers: then, catch
// A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using the methods .then and .catch.

// then
// The most important, fundamental one is .then.

// The syntax is:

promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
// The first argument of .then is a function that runs when the promise is resolved and receives the result.

// The second argument of .then is a function that runs when the promise is rejected and receives the error.

// For instance, here’s a reaction to a successfully resolved promise:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);
// The first function was executed.

// And in the case of a rejection, the second one:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);
// If we’re interested only in successful completions, then we can provide only one function argument to .then:

let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert); // shows "done!" after 1 second


// catch
// If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second
// The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.


// Cleanup: finally
// Just like there’s a finally clause in a regular try {...} catch {...}, there’s finally in promises.

// The call .finally(f) is similar to .then(f, f) in the sense that f runs always, when the promise is settled: be it resolve or reject.

// The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.

// E.g. stopping loading indicators, closing no longer needed connections, etc.

// Think of it as a party finisher. No matter was a party good or bad, how many friends were in it, we still need (or at least should) do a cleanup after it.

// The code may look like this:

new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve or maybe reject */
})
  // runs when the promise is settled, doesn't matter successfully or not
  .finally(() => stop loading indicator)
  // so the loading indicator is always stopped before we go on
  .then(result => show result, err => show error)
// Please note that finally(f) isn’t exactly an alias of then(f,f) though.

// There are important differences:

// A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.

// Please take a look at the example above: as you can see, the finally handler has no arguments, and the promise outcome is handled by the next handler.

// A finally handler “passes through” the result or error to the next suitable handler.

// For instance, here the result is passed through finally to then:

new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 2000);
})
  .finally(() => alert("Promise ready")) // triggers first
  .then(result => alert(result)); // <-- .then shows "value"
// As you can see, the value returned by the first promise is passed through finally to the next then.

// That’s very convenient, because finally is not meant to process a promise result. As said, it’s a place to do generic cleanup, no matter what the outcome was.

// And here’s an example of an error, for us to see how it’s passed through finally to catch:

new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready")) // triggers first
  .catch(err => alert(err));  // <-- .catch shows the error
// A finally handler also shouldn’t return anything. If it does, the returned value is silently ignored.

// The only exception to this rule is when a finally handler throws an error. Then this error goes to the next handler, instead of any previous outcome.

// To summarize:

// A finally handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.
// If a finally handler returns something, it’s ignored.
// When finally throws an error, then the execution goes to the nearest error handler.
// These features are helpful and make things work just the right way if we use finally how it’s supposed to be used: for generic cleanup procedures.


