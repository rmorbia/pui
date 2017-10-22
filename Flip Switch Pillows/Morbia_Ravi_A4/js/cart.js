// JavaScript Document

window.onload = function() {
	// Update Cart # in Nav
	document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";

	var cart = JSON.parse(localStorage.getItem("savePillow"));

	if (localStorage.length == 0) {
		document.getElementById("cart-contents").style.display = "none";
		document.querySelector("body").style.background = "red";
	}

	for (var i = 0; i < cart.length; i++) {
		// Parse localStorage to get item attributes.
		var name = JSON.parse(localStorage.savePillow)[i].name;
		var type = JSON.parse(localStorage.savePillow)[i].type;
		var shape = JSON.parse(localStorage.savePillow)[i].shape;
		var typeImage = JSON.parse(localStorage.savePillow)[i].typeImage;
		var shapeImage = JSON.parse(localStorage.savePillow)[i].shapeImage;
		var price = JSON.parse(localStorage.savePillow)[i].price;
		var quantity = JSON.parse(localStorage.savePillow)[i].quantity;
		var subtotal = JSON.parse(localStorage.savePillow)[i].subtotal;
		
		// Create HTML for new item
		var newItemHtml = document.getElementById("item").outerHTML;
		var newDiv = document.createElement("div");
		newDiv.id = "item"+String(i);
		newDiv.innerHTML = newItemHtml;
		document.getElementById("cart-contents").appendChild(newDiv);
		
		// Insert localStorage data into new item.
		console.log(document.getElementById("item"+String(i)).childNodes[0].getElementsByClassName("quantity")[0].innerHtml);
		
		document.getElementById("item"+String(i)).childNodes[0].getElementsByClassName("item-type")[0].src = typeImage;
		document.getElementById("item"+String(i)).childNodes[0].getElementsByClassName("item-shape")[0].src = shapeImage;
		document.getElementById("item"+String(i)).childNodes[0].getElementsByClassName("product-name")[0].innerHTML = name;
		document.getElementById("item"+String(i)).childNodes[0].getElementsByClassName("product-type")[0].innerHTML = type + " | ";
		document.getElementById("item"+String(i)).childNodes[0].getElementsByClassName("product-shape")[0].innerHTML = shape;
		document.getElementById("item"+String(i)).childNodes[0].getElementsByClassName("price")[0].innerHTML = price;
		document.getElementById("item"+String(i)).childNodes[0].getElementsByClassName("quantity")[0].innerHTML = "x"+quantity;
		document.getElementById("item"+String(i)).childNodes[0].getElementsByClassName("subtotal")[0].innerHTML = "$"+subtotal;
		
		console.log(document.getElementById("item"+String(i)).childNodes[0].getElementsByClassName("quantity")[0].innerHtml);
		

		//document.getElementById("cart-contents").appendChild(newItemHtml);

		//console.log(name, type, shape, typeImage, price);
		//document.getElementById("local-storage").appendChild= name + type + shape + typeImage + price + "<br>";
	}

};
