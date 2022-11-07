// Private and protected properties and methods

// One of the most important principles of object oriented programming – delimiting internal interface from the external one.

// That is “a must” practice in developing anything more complex than a “hello world” app.

// To understand this, let’s break away from development and turn our eyes into the real world.

// Usually, devices that we’re using are quite complex. But delimiting the internal interface from the external one allows to use them without problems.

// Internal and external interface
// In object-oriented programming, properties and methods are split into two groups:

// Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
// External interface – methods and properties, accessible also from outside the class.
// If we continue the analogy with the coffee machine – what’s hidden inside: a boiler tube, heating element, and so on – is its internal interface.

// An internal interface is used for the object to work, its details use each other. For instance, a boiler tube is attached to the heating element.

// But from the outside a coffee machine is closed by the protective cover, so that no one can reach those. Details are hidden and inaccessible. We can use its features via the external interface.

// So, all we need to use an object is to know its external interface. We may be completely unaware how it works inside, and that’s great.

// That was a general introduction.

// In JavaScript, there are two types of object fields (properties and methods):

// Public: accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.
// Private: accessible only from inside the class. These are for the internal interface.
// In many other languages there also exist “protected” fields: accessible only from inside the class and those extending it (like private, but plus access from inheriting classes). They are also useful for the internal interface. They are in a sense more widespread than private ones, because we usually want inheriting classes to gain access to them.

// Protected fields are not implemented in JavaScript on the language level, but in practice they are very convenient, so they are emulated.

// Now we’ll make a coffee machine in JavaScript with all these types of properties. A coffee machine has a lot of details, we won’t model them to stay simple (though we could).


// Protecting “waterAmount”

class CoffeeMachine {
    waterAmount = 0; // the amount of water inside
  
    constructor(power) {
      this.power = power;
      alert( `Created a coffee-machine, power: ${power}` );
    }
  
  }
  
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;
coffeeMachine.power = 200;

//   Right now the properties waterAmount and power are public. We can easily get/set them from the outside to any value.

//   Let’s change waterAmount property to protected to have more control over it. For instance, we don’t want anyone to set it below zero.
  
//   Protected properties are usually prefixed with an underscore _.
  
//   That is not enforced on the language level, but there’s a well-known convention between programmers that such properties and methods should not be accessed from the outside.
  
//   So our property will be called _waterAmount:


class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
  
// add water
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10

// Now the access is under control, so setting the water amount below zero becomes impossible.

// Read-only “power”
// For power property, let’s make it read-only. It sometimes happens that a property must be set at creation time only, and then never modified.

// That’s exactly the case for a coffee machine: power never changes.

// To do so, we only need to make getter, but not the setter:

class CoffeeMachine {
    // ...
  
    constructor(power) {
      this._power = power;
    }
  
    get power() {
      return this._power;
    }
  }
  
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

coffeeMachine.power = 25; // Error (no setter)
alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W


//   ----------------------------------------------

// Getter/setter functions
// Here we used getter/setter syntax.

// But most of the time get.../set... functions are preferred, like this:

class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine().setWaterAmount(100);

// That looks a bit longer, but functions are more flexible. They can accept multiple arguments (even if we don’t need them right now).

// On the other hand, get/set syntax is shorter, so ultimately there’s no strict rule, it’s up to you to decide.

// ------------------------------------------------------

// Private “#waterLimit”

// There’s a finished JavaScript proposal, almost in the standard, that provides language-level support for private properties and methods.

// Privates should start with #. They are only accessible from inside the class.

// For instance, here’s a private #waterLimit property and the water-checking private method #fixWaterAmount:


class CoffeeMachine {
    #waterLimit = 200;
  
    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
  
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // can't access privates from outside of the class
  coffeeMachine.#fixWaterAmount(123); // Error
  coffeeMachine.#waterLimit = 1000; // Error

// On the language level, # is a special sign that the field is private. We can’t access it from outside or from inheriting classes.

// Private fields do not conflict with public ones. We can have both private #waterAmount and public waterAmount fields at the same time.

// For instance, let’s make waterAmount an accessor for #waterAmount:

class CoffeeMachine {

    #waterAmount = 0;
  
    get waterAmount() {
      return this.#waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) value = 0;
      this.#waterAmount = value;
    }
  }
  
  let machine = new CoffeeMachine();
  
  machine.waterAmount = 100;
  alert(machine.#waterAmount); // Error
