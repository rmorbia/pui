// JavaScript Document

window.onload = function() {
	document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";
	
	var cart = JSON.parse(localStorage.getItem("savePillow"));
	
	for(var i=0; i<cart.length; i++) {
	  var name = JSON.parse(localStorage.savePillow)[i].name;
	  var type = JSON.parse(localStorage.savePillow)[i].type;
	  var shape = JSON.parse(localStorage.savePillow)[i].shape;
	  var typeImage = JSON.parse(localStorage.savePillow)[i].typeImage;
	  var price = JSON.parse(localStorage.savePillow)[i].price;
	  
	  console.log(name, type, shape, typeImage, price);
	  document.getElementById("local-storage").appendChild= name + type + shape + typeImage + price + "<br>";
	}
	
};
