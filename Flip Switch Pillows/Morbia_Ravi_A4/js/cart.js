// JavaScript Document

window.onload = function () {
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
		var price = JSON.parse(localStorage.savePillow)[i].price;
		
		// Create HTML for new item
		var newItemHtml = document.getElementById("item").outerHTML;
		var newDiv = document.createElement("div");
		newDiv.id = "item"+String(i);
		newDiv.innerHTML = newItemHtml;
		document.getElementById("cart-contents").appendChild(newDiv);
		
		// Insert localStorage data into new item.
		console.log(document.getElementById("item0").childNodes[i].childNodes[0]);
		

		//document.getElementById("cart-contents").appendChild(newItemHtml);

		//console.log(name, type, shape, typeImage, price);
		//document.getElementById("local-storage").appendChild= name + type + shape + typeImage + price + "<br>";
	}

};
