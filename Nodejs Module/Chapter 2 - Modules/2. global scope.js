// When we define the function with a variable or a variable in client side js code. It is global for the client side application.

// Now, any two functions or variables with same name will override the previous one. Because they are in the global scope.

// Hence in node. Every .js file is a module and the variables and functions defined inside the .js file will have scope within the .js file itself.

// Hence every .js file in node is called as a module.

// Now if we need to use the variable or the function outside the module we need to export it.


console.log(module); 
// Now this might appear as an global object, but it is not.
// Once executed this returns an json object, with some metadata about the module.

