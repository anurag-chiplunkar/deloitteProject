// JavaScript Basic Events
// mouse events
// 	click (onclick)
// 	double click (ondbclick)
// 	right click (oncontextmenu)
// 	mouse hover (onmouseenter)
// 	mouse out (onmouseout)
// 	mouse down (onmousedown)
// 	mouse up (onmouseup)
// keyboard events
// 	key press (onkeypress)
// 	key up (onkeyup)
// windows events --  always works on body tag
// 	load (onload)
// 	unload (onunload)
// 	resize (onresize)
// 	scroll (onscroll)






// JavaScript Basic Events
// mouse events
// keyboard events
// windows events --  always works on body tag
// copy the basic even here

// =============================================================
// to add an event using html
// <button onClick="abc()"></button>
// <img src="..." onmouseenter="xyz">	

// ============================================================
// assign events using the html dom
// document.getElementById(id).onClick = functionName;

// document.getElementById('header').onclick = abc;
// document.getElementById('header').onmouseenter = abc;

// function abc(){
// 	document.getElementById('header').style.background = 'green';
// }

// ==========================================================
// DOM addEventListner() Method:
 // document.getElementById(id).addEventListner(event_name without 'on' word, functionName or make function here);
// best part is can use multiple events on single function
document.getElementById('header').addEventListener("mouseenter", abc);

// document.getElementById('header').addEventListener("click", abc);

document.getElementById('header').addEventListener("click", function(){
	// document.getElementById('header').style.border = "10px solid red";});

	this.style.border = "10px solid red";});

function abc(){
	document.getElementById('header').style.background = 'green';
}