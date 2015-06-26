window.onload = init;
//var a;

//var a = "Nothing here!";

function init() {
	var submit = document.getElementById("submit").onclick = calculate;
}

//var sumbit = document.getElementById("submit").onclick = function calculate;

	function calculate() {			
		var firNum = Number(document.getElementById("firNum").value);
		var secIn = Number(document.getElementById("secIn").value);		
		var output = document.getElementById("output");
		var a = Number(firNum * secIn);
		document.getElementById("output").innerHTML = a;
		event.preventDefault();
		//alert("WTF");		
	}
