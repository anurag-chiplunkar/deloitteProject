// A variable
// There are two limitations on variable names in JavaScript:

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.


let userName;
let userName;
let test123;
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3
let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name


// Case matters
// Variables named apple and APPLE are two different variables.


// Reserved names
let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!



let message;


// Declaring twice triggers an error
let message;

message = 'Hello'; // store the string 'Hello' in the variable named message


let message;
message = 'Hello!';

alert(message); // shows the variable content



let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!


// This works, but not recommended
let user = 'John', age = 25, message = 'Hello';

// This way is recomended
let user = 'John';
let age = 25;
let message = 'Hello';


let user = 'John'
  , age = 25
  , message = 'Hello';


// Constants
// Benefits:
// COLOR_ORANGE is much easier to remember than "#FF7F00".
// It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
// When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.
// Capital-named constants are only used as aliases for “hard-coded” values.
// To declare a constant (unchanging) variable, use const instead of let:

const myBirthday = '18.04.1982';


const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!



// Uppercase constants
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00


// Summary
// We can declare variables to store data by using the var, let, or const keywords.

// let – is a modern variable declaration.
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
// const – is like let, but the value of the variable can’t be changed.

// Variables should be named in a way that allows us to easily understand what’s inside them.