// JavaScript Document

window.onload = function() {
	if (localStorage.length == 1) {
		document.getElementById("nav-cart").innerHTML = "Cart (1)";
		console.log("There is 1 item in lS.");
	} else {
		document.getElementById("#-of-items").innerHTML = "Cart (" + localStorage.length + ")";
		console.log("There are " + localStorage.length + " items in lS.");
	}
	
	var newPillow = JSON.parse(localStorage.getItem("savePillow"));
	//if (localStorage.getItem("savePillow"))
};
