function doSomething() {
	let a = document.getElementById('inputA').value;
	let b = document.getElementById('inputA').value;
	document.getElementById("valueA").innerHTML = a;
	document.getElementById("valueA").innerHTML = b;
	document.getElementById("valueA").innerHTML = Number(a) + Number(b);
}

function timeDp() {
	alert(new Date());
}