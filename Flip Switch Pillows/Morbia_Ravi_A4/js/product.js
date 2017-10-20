// JavaScript Document

/*** Object Constructors ***/

/*function Pillow(name, type, shape) {
	this.name = name;
	this.type = type;
	this.shape = shape;
	this.typeImage = "";
	this.shapeImage = "";
	this.price = "";
	
}*/


/*** Global Variables ***/

/*** Functions ***/
var radioBed = document.getElementById("bed-radio");
radioBed.onclick = function setSelected();
function setSelected(){
  var bed = document.getElementById("bed");
  bed.classList.add('selected-type');
}
