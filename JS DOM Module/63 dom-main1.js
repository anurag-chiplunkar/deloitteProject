// DOM Get and Set Method
// What we can Get with DOM
// HTML
// Text 
// Attribute

// DOM Get methods
// innerText
// innerHTML
// getAttribute
// getAttributeNode
// attributes

// element = document.getElementById("header").innerText;
// console.log(element)
// element = document.getElementsByTagName("h1").innerText;
// console.log(element)

// element = document.getElementById("content").innerHTML;
// console.log(element)

// elementc = document.getElementById("content").innerText;
// console.log(elementc)

// elementc = document.getElementById("content").innerHTML;
// console.log(elementc) 

// elementc = document.getElementById("header").getAttribute("class");
// console.log(elementc)

// elementc = document.getElementById("header").getAttribute("id");
// console.log(elementc)

// elementc = document.getElementById("header").getAttribute("style");
// console.log(elementc)

var elementc = document.getElementById("test1").value;
console.log(elementc)
alert(elementc)

// elementc = document.getElementById("header").getAttribute("onclick");
// console.log(elementc)

// elementc = document.getElementById("header").getAttributeNode("class");
// console.log(elementc)

// elementc = document.getElementById("header").getAttributeNode("onclick");
// console.log(elementc)

// elementc = document.getElementById("header").getAttributeNode("onclick").value;
// console.log(elementc)

// elementc = document.getElementById("header").attributes;
// console.log(elementc)

elementc = document.getElementById("header").attributes[1];
console.log(elementc)

// elementc = document.getElementById("header").attributes[2].name;
// console.log(elementc)

// elementc = document.getElementById("header").attributes[1].value;
// console.log(elementc)



// DOM Set methods
// innerText
// innerHTML
// setAttribte
// attribute
// removeAttribute

// =====================================================
// document.getElementById("header").innerText = "Wow"

// document.getElementById("header").innerText = "<h1>Wow</h1>"

// document.getElementById("header").innerHTML = "<h1>Wow</h1>"
// =========================================================

// this will change the header color from white to yellow
// setelement = document.getElementById("header").getAttribute("class");
// console.log(setelement)
// setelement = document.getElementById("header").setAttribute("class", "xyz")
// console.log(setelement)
setelement = document.getElementById("header").setAttribute("style", "background-color: orange;")
console.log(setelement)

// anurag = document.getElementById("header").attributes[1]
// attr = document.getElementById("header").attributes
// console.log(attr)
// console.log(anurag)
// document.getElementById("header").attributes[1].value = "xyz"

// setelement = document.getElementById("header").getAttribute("class");
// console.log(setelement)


// setelement = document.getElementById("header").innerHTML;
// console.log(setelement)
// =========================================================


// removeAttribute
// it will remove the entire attribute

document.getElementById("header").removeAttribute("style");

// document.getElementById("header").removeAttribute("class");