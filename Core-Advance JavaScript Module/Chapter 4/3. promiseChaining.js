// Promises chaining


new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then(function(result) { // (**)
  
    alert(result); // 1
    return result * 2;
  
  }).then(function(result) { // (***)
  
    alert(result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    alert(result); // 4
    return result * 2;
  
  });

// The idea is that the result is passed through the chain of .then handlers.

// Here the flow is:

// The initial promise resolves in 1 second (*),
// Then the .then handler is called (**), which in turn creates a new promise (resolved with 2 value).
// The next then (***) gets the result of the previous one, processes it (doubles) and passes it to the next handler.
// …and so on.

// The whole thing works, because every call to a .then returns a new promise, so that we can call the next .then on it.

// When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.

// A classic newbie error: technically we can also add many .then to a single promise. This is not chaining.

// For example:


let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });

//   What we did here is just several handlers to one promise. They don’t pass the result to each other; instead they process it independently.

// Returning promises
// A handler, used in .then(handler) may create and return a promise.

// In that case further handlers wait until it settles, and then get its result.

// For instance:

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  alert(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  alert(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 4

});


// Here the first .then shows 1 and returns new Promise(…) in the line (*). After one second it resolves, and the result (the argument of resolve, here it’s result * 2) is passed on to the handler of the second .then. That handler is in the line (**), it shows 2 and does the same thing.

// So the output is the same as in the previous example: 1 → 2 → 4, but now with 1 second delay between alert calls.

// Returning promises allows us to build chains of asynchronous actions.

// ------------------------------------------------------

// Example: loadScript
// Let’s use this feature with the promisified loadScript, defined in the previous chapter, to load scripts one by one, in sequence:

loadScript("/article/promise-chaining/one.js")
  .then(function(script) {
    return loadScript("/article/promise-chaining/two.js");
  })
  .then(function(script) {
    return loadScript("/article/promise-chaining/three.js");
  })
  .then(function(script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    one();
    two();
    three();
  });

// This code can be made bit shorter with arrow functions:

loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("/article/promise-chaining/two.js"))
  .then(script => loadScript("/article/promise-chaining/three.js"))
  .then(script => {
    // scripts are loaded, we can use functions declared there
    one();
    two();
    three();
  });

// Here each loadScript call returns a promise, and the next .then runs when it resolves. Then it initiates the loading of the next script. So scripts are loaded one after another.

// We can add more asynchronous actions to the chain. Please note that the code is still “flat” — it grows down, not to the right. There are no signs of the “pyramid of doom”.

// Technically, we could add .then directly to each loadScript, like this:

loadScript("/article/promise-chaining/one.js").then(script1 => {
  loadScript("/article/promise-chaining/two.js").then(script2 => {
    loadScript("/article/promise-chaining/three.js").then(script3 => {
      // this function has access to variables script1, script2 and script3
      one();
      two();
      three();
    });
  });
});

// This code does the same: loads 3 scripts in sequence. But it “grows to the right”. So we have the same problem as with callbacks.

// People who start to use promises sometimes don’t know about chaining, so they write it this way. Generally, chaining is preferred.

// Sometimes it’s ok to write .then directly, because the nested function has access to the outer scope. In the example above the most nested callback has access to all variables script1, script2, script3. But that’s an exception rather than a rule.