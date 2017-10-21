// JavaScript Document

window.onload = function() {
	document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";
};

/*** Object Constructors ***/

function Pillow(name, type, shape, typeImage, price, quantity) {
	this.name = name;
	this.type = type;
	this.shape = shape;
	this.typeImage = typeImage;
	this.price = price;
	this.qantity = quantity;
}
	
/*** Functions ***/
function setType() {
	var pillowType = document.getElementById("type-select").value;
	document.getElementById("product-type").innerHTML = pillowType;
	if (pillowType == "Couch Pillow") {
		document.getElementById("main-photo").src = "img/details/main-product-couch.png";
		document.getElementById("product-price").innerHTML = "$39<sup>99</sup>";
	} else if (pillowType == "Bed Pillow") {
		document.getElementById("main-photo").src = "img/details/main-product-bed.jpg";
		document.getElementById("product-price").innerHTML = "$29<sup>99</sup>";
	} else if (pillowType == "Round Pillow") {
		document.getElementById("main-photo").src = "img/details/main-product-round.jpg";
		document.getElementById("product-price").innerHTML = "$34<sup>99</sup>";
	} else {
		document.getElementById("main-photo").src = "img/details/main-product-floor.jpg";
		document.getElementById("product-price").innerHTML = "$49<sup>99</sup>";
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
	var itemName = document.getElementById("product-name").innerHTML;
	var itemType = document.getElementById("type-select").value;
	var itemShape = document.getElementById("shape-select").value;
	var itemImage = document.getElementById("main-photo").src;
	var itemPrice = document.getElementById("product-price").innerHTML;
	var itemQuantity = document.getElementById("quantity").value;
	console.log(itemName, itemType, itemShape, itemImage, itemPrice, itemQuantity);

	var cartArray = JSON.parse(localStorage.getItem("savePillow")) || [];
	var pillowToAdd = new Pillow(itemName, itemType, itemShape, itemImage, itemPrice, itemQuantity);
console.log(cartArray);
	cartArray.push(pillowToAdd);
	localStorage.setItem("savePillow", JSON.stringify(cartArray));
console.log((JSON.parse(localStorage.getItem("savePillow")) || []).length + " item(s) in local storage.");
	// Update Cart in Nav
	document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";
}
