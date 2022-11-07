// In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).


// The “class” syntax
// The basic syntax is:

class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}

// Then use new MyClass() to create a new object with all the listed methods.

// The constructor() method is called automatically by new, so we can initialize the object there.

// For example:

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert('Hi! '+this.name);
  }

}

// Usage:
let user = new User("John");
let user2 = new User("Don")
user.sayHi();
user2.sayHi()


// When new User("John") is called:

// A new object is created.
// The constructor runs with the given argument and assigns it to this.name.
// …Then we can call object methods, such as user.sayHi().


// No comma between class methods
// A common pitfall for novice developers is to put a comma between class methods, which would result in a syntax error.

// The notation here is not to be confused with object literals. Within the class, no commas are required.

// What is a class?
// So, what exactly is a class? That’s not an entirely new language-level entity, as one might think.

// Let’s unveil any magic and see what a class really is. That’ll help in understanding many complex aspects.

// In JavaScript, a class is a kind of function.

// Here, take a look:

class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // proof: User is a function
  alert(typeof User); // function

//   What class User {...} construct really does is:

//   Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
//   Stores class methods, such as sayHi, in User.prototype.


// Class Expression
// Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.

// Here’s an example of a class expression:

let User = class {
  sayHi() {
    alert("Hello");
  }
};

// Similar to Named Function Expressions, class expressions may have a name.

// Getters/setters
// Just like literal objects, classes may include getters/setters, computed properties etc.

// Here’s an example for user.name implemented using get/set:

class User {

    constructor(name) {
      this.name = name;
    }
  
    // get name() {
    //   return this._name;
    // }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  alert(user.name); // John
  
  user = new User(""); // Name is too short.
  alert(user.name);

//   Class fields

// Previously, our classes only had methods.

// “Class fields” is a syntax that allows to add any properties.

// For instance, let’s add name property to class User:

class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!

// Making bound methods with class fields

// So if an object method is passed around and called in another context, this won’t be a reference to its object any more.

// For instance, this code will show undefined:

class Button {
  constructor(value, amount) {
    this.value = value;
    this.amount = amount  // not required
  }

  click() {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined
// console.log("later")

// The problem is called "losing this".

// There are two approaches to fixing it, as discussed in the chapter Function binding:

// Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).
// Bind the method to object, e.g. in the constructor.

// Class fields provide another, quite elegant syntax:

class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 5000); // hello


// The class field click = () => {...} is created on a per-object basis, there’s a separate function for each Button object, with this inside it referencing that object. We can pass button.click around anywhere, and the value of this will always be correct.

// That’s especially useful in browser environment, for event listeners.

