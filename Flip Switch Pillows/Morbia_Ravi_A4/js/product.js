// JavaScript Document

window.onload = function() {
	document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";
};

/*** Object Constructors ***/

function Pillow(name, type, shape, typeImage, shapeImage, price, quantity, subtotal) {
	this.name = name;
	this.type = type;
	this.shape = shape;
	this.typeImage = typeImage;
	this.shapeImage = shapeImage;
	this.price = price;
	this.quantity = quantity;
	this.subtotal = subtotal;
}
	
/*** Functions ***/
function setType() {
	var pillowType = document.getElementById("type-select").value;
	document.getElementById("product-type").innerHTML = pillowType;
	if (pillowType == "Couch Pillow") {
		document.getElementById("main-photo").src = "img/details/main-product-couch.png";
		document.getElementById("product-price").innerHTML = "$40";
	} else if (pillowType == "Bed Pillow") {
		document.getElementById("main-photo").src = "img/details/main-product-bed.jpg";
		document.getElementById("product-price").innerHTML = "$30";
	} else if (pillowType == "Round Pillow") {
		document.getElementById("main-photo").src = "img/details/main-product-round.jpg";
		document.getElementById("product-price").innerHTML = "$35";
	} else {
		document.getElementById("main-photo").src = "img/details/main-product-floor.jpg";
		document.getElementById("product-price").innerHTML = "$50";
	}
}

// Change Shape Image
function setShape() {
	var pillowShape = document.getElementById("shape-select").value;
	document.getElementById("product-shape").innerHTML = pillowShape;
	console.log(pillowShape);
	if (pillowShape == "Square") {
		document.getElementById("shape-img").src = "img/details/shapes-square.png";
	} else if (pillowShape == "Round") {
		document.getElementById("shape-img").src = "img/details/shapes-round.png";
	} else if (pillowShape == "Dog") {
		document.getElementById("shape-img").src = "img/details/shapes-dog.png";
	} else if (pillowShape == "Bear") {
		document.getElementById("shape-img").src = "img/details/shapes-bear.png";
	} else if (pillowShape == "Bunny") {
		document.getElementById("shape-img").src = "img/details/shapes-bunny.png";
	} else {
		document.getElementById("shape-img").src = "img/details/shapes-cat.png";
	}
}

/*** Local Storage ***/
function saveItem() {
	var name = document.getElementById("product-name").innerHTML;
	var type = document.getElementById("type-select").value;
	var shape = document.getElementById("shape-select").value;
	var typeImage = document.getElementById("main-photo").getAttribute("src");
	var shapeImage = document.getElementById("shape-img").getAttribute("src");
	var price = document.getElementById("product-price").innerHTML;
	var quantity = document.getElementById("quantity").value;
	var subtotal = Number(price.substring(1,price.length)) * quantity;
	console.log(price.substring(1,price.length));
	console.log(quantity);
	console.log(subtotal);

	var cartArray = JSON.parse(localStorage.getItem("savePillow")) || [];
	var pillowToAdd = new Pillow(name, type, shape, typeImage, shapeImage, price, quantity, subtotal);
console.log(cartArray);
	cartArray.push(pillowToAdd);
	localStorage.setItem("savePillow", JSON.stringify(cartArray));
console.log((JSON.parse(localStorage.getItem("savePillow")) || []).length + " item(s) in local storage.");
	
	// Update Cart in Nav
	// Need to figure out what to do when there is nothing in local storage!!!!!!!!!!!
	document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";
}
