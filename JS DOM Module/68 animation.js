var a = 0;
// setInterval(Anim, 1000);
// setInterval(Anim, 100);
// setInterval(Anim, 10);


	// function Anim(){
	// 	var target = document.getElementById('test');
	// 	a = a + 10;
	// 	target.style.marginLeft = a + 'px';
	// 	console.log(a)
	// }

var id = setInterval(Anim, 500);

function Anim(){
	a = a + 10;
	if(a == 50){
		clearInterval(id);
	}else{
		var target = document.getElementById('test');
		target.style.marginLeft = a + 'px';
		console.log(a)
	}
}