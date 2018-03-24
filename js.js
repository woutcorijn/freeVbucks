console.log("this is fake");
var click = 0;

function press() {
	click = click + 1;
	document.getElementById("am").innerHTML = "Amount: " + click;
	console.log(click)
}

function get() {
	if (click > 5000) {
		window.open("fake.html");
	}
}