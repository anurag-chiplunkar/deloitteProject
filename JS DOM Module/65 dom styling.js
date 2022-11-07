// DOM CSS Styling Mothods
// Style
// className
// classLIst

var element

// element = document.querySelector('.abc').style.border;
// // element = document.querySelector('#header').style.color;
// console.log(element)
// // // lets see how to set the style
// // document.querySelector('#header').style.backgroundColor = "tan";
// document.querySelector('.abc').style.border = "20px dashed red";
// // document.querySelector('#header').style.color = "blue";
// element = document.querySelector('#header').style.border;
// console.log(element)


// to set classname
// first we will remove the class from the header and will set it using js

element = document.querySelector('#header').className;
console.log(element)

document.querySelector('#header').className = "xyz";

// element = document.querySelector('#header').className;
// console.log(element)

// setting class using classList, and also learning the difference between className and classList
// document.querySelector('#header').classList = "abc xyz";
// element = document.querySelector('#header').className;
// element = document.querySelector('#header').classList;
element = document.querySelector('#header').className;

console.log(element)