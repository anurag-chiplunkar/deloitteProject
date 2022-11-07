// Class inheritance
// Class inheritance is a way for one class to extend another class.

// So we can create new functionality on top of the existing.


// The “extends” keyword
// Let’s say we have class Animal:

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
}

let animal = new Animal("My animal");
animal.run()
// animal.run(30)

// As rabbits are animals, Rabbit class should be based on Animal, have access to animal methods, so that rabbits can do what “generic” animals can do.

// The syntax to extend another class is: class Child extends Parent.

// Let’s create class Rabbit that inherits from Animal:

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!


// Overriding a method
// Now let’s move forward and override a method. By default, all methods that are not specified in class Rabbit are taken directly “as is” from class Animal.

// But if we specify our own method in Rabbit, such as stop() then it will be used instead:

class Rabbit extends Animal {
  stop() {
    // ...now this will be used for rabbit.stop()
    // instead of stop() from class Animal
  }
}
// Usually, however, we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

// Classes provide "super" keyword for that.

// super.method(...) to call a parent method.
// super(...) to call a parent constructor (inside our constructor only).
// For instance, let our rabbit autohide when stopped:

class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.stop(); // White Rabbit stands still. White Rabbit hides!


// Now Rabbit has the stop method that calls the parent super.stop() in the process.

// Overriding constructor
// With constructors it gets a little bit tricky.

// Until now, Rabbit did not have its own constructor.

// According to the specification, if a class extends another class and has no constructor, then the following “empty” constructor is generated:

class Rabbit extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}


// As we can see, it basically calls the parent constructor passing it all the arguments. That happens if we don’t write a constructor of our own.

// Now let’s add a custom constructor to Rabbit. It will specify the earLength in addition to name:

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// Doesn't work!
let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined.

// So a derived constructor must call super in order to execute its parent (base) constructor, otherwise the object for this won’t be created. And we’ll get an error.

// For the Rabbit constructor to work, it needs to call super() before using this, like here:


class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    // ...
  }
  
  class Rabbit extends Animal {
  
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
  
    // ...
  }
  
  // now fine
  let rabbit = new Rabbit("White Rabbit", 10);
  alert(rabbit.name); // White Rabbit
  alert(rabbit.earLength); // 10

// Overriding class fields: a tricky note

// We can override not only methods, but also class fields.

// Although, there’s a tricky behavior when we access an overridden field in parent constructor, quite different from most other programming languages.

// Consider this example:

class Animal {
    name = 'animal';
  
    constructor() {
      alert(this.name); // (*)
    }
  }
  
  class Rabbit extends Animal {
    name = 'rabbit';
  }
  
new Animal(); // animal
new Rabbit(); // animal

// Here, class Rabbit extends Animal and overrides the name field with its own value.

// There’s no own constructor in Rabbit, so Animal constructor is called.

// What’s interesting is that in both cases: new Animal() and new Rabbit(), the alert in the line (*) shows animal.

// In other words, the parent constructor always uses its own field value, not the overridden one.

// What’s odd about it?

// If it’s not clear yet, please compare with methods.

// Here’s the same code, but instead of this.name field we call this.showName() method:

class Animal {
    showName() {  // instead of this.name = 'animal'
      alert('animal');
    }
  
    constructor() {
      this.showName(); // instead of alert(this.name);
    }
  }
  
  class Rabbit extends Animal {
    showName() {
      alert('rabbit');
    }
  }
  
new Animal(); // animal
new Rabbit(); // rabbit


// Static properties and methods
class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static createTodays() {
      // remember, this = Article
      return new this("Today's digest", new Date());
    }
  }
  
let article = Article.createTodays();

alert( article.title ); // Today's digest

// Now every time we need to create a today’s digest, we can call Article.createTodays(). Once again, that’s not a method of an article, but a method of the whole class.

// Inheritance of static properties and methods

// Static properties and methods are inherited.

// For instance, Animal.compare and Animal.planet in the code below are inherited and accessible as Rabbit.compare and Rabbit.planet:

class Animal {
    static planet = "Earth";
  
    constructor(name, speed) {
      this.speed = speed;
      this.name = name;
    }
  
    run(speed = 0) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }
  
  }
  
  // Inherit from Animal
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
  ];
  
rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

alert(Rabbit.planet); // Earth















class Animal {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
}

let animal = new Animal("My animal", 0);
animal.run()











