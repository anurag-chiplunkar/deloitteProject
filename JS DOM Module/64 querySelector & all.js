// To avoid remembering and using three different selectors to target different dom objects.
// So we use querySelector and querySelectorAll

// querySelector -- document.querySelector(CSS Selector)

// querySelectorAll -- document.querySelectorAll(CSS Selector)

// difference is,
// querySelector will targer only the first occurance from the matching elements
// querySelectorAll will target all the html elements

// set method

elementa = document.querySelectorAll(".list")[1].innerHTML = "Hello";
console.log(elementa)

// document.querySelector("#header").innerHTML = "<h1>Yeaaahh!!!</h1>";

// elementa = document.querySelector("#header").getAttribute("class");
// console.log(elementa)

// elementa = document.querySelector("#header");
// console.log(elementa.getAttribute("class"))

// elementa = document.querySelector(".list");
// console.log(elementa)

// elementa = document.getElementsByClassName("list");
// console.log(elementa)


// elementa = document.querySelectorAll(".list");
// console.log(elementa)

// elementa = document.querySelectorAll(".list")[1];
// console.log(elementa)

// elementa = document.querySelectorAll(".list")[1].innerHTML;
// console.log(elementa)

// elementa = document.querySelectorAll("#content p");
// console.log(elementa)