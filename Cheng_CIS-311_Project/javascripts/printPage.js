var $ = function (id) {
	return document.getElementById(id);
}
	
var printPage= function() {
	window.print();
}

window.onload= function() {
	$("printButton").onclick = printPage;
}

var d = new Date();
document.getElementById("demo").innerHTML = d;

