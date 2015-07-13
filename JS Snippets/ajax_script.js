
var request;
/* This is for older browser compatability */
if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObect("Microsoft.XMLHTTP");
}
/* This is for older browser compatability */

var section_2 = document.getElementById("section_2");
request.open("GET", "data.txt", true);
request.onreadystatechange = function() {
	if((request.readyState === 4) && (request.status === 200)) {
		for(var i = 0; i < 10; i++) {
				console.log(request);
				section_2.innerHTML = "<h1>" + request.responseText + "</h2>";				
			}
	} 
} 
request.send();


/* Example element creation from and xml document */
/*
var items = request.responseXML.getElementsByTagName("name"); This get data from an xml file

This is an UL inside of the output variable that loops through itself. 
var output = "<ul>";	
for(i = 0; i < items.length; i++) {
	output += "<li>" + items[i].firstChild.nodeValue + "</li>";
}
output += "</ul>";

This puts the variable inside an HTML element with an ID of update. 
document.getElementById("update").innerHTML = output;
*/