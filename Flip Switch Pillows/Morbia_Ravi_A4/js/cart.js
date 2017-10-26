// JavaScript Document

$(document).ready ( function () {
	// Update Cart # in Nav
	if (JSON.parse(localStorage.getItem("savePillow")) == null) {
		document.getElementById("nav-cart").innerHTML = "Cart (0)";
	} else {
		document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";
		var cart = JSON.parse(localStorage.getItem("savePillow"));

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
			newDiv.id = "item" + String(i);
			newDiv.innerHTML = newItemHtml;
			document.getElementById("cart-contents").appendChild(newDiv);

			// Insert localStorage data into new item.
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("item-type")[0].src = typeImage;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("item-shape")[0].src = shapeImage;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("product-name")[0].innerHTML = name;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("product-type")[0].innerHTML = type + " | ";
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("product-shape")[0].innerHTML = shape;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("price")[0].innerHTML = price;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("quantity")[0].innerHTML = "x" + quantity;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("subtotal")[0].innerHTML = "$" + subtotal;
		}
	}
	
	$(".a-link").click(function() {
		$(this).closest(".item-container").remove();
		console.log($(this));
	})



//$(document).ready(function () {

	

});
