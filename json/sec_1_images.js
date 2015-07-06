
var request;
/* This is for older browser compatability */

if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObect("Microsoft.XMLHTTP");
}
//var section_1 = document.getElementById("section_1");

request.open('GET', 'http://localhost/RABITHOLE/json/images.json', true);
request.onreadystatechange = function() {
	if((request.readyState === 4) && (request.status === 200)) {
		console.log(request);
		console.log(request.slide);
		//console.log(request.slide.sec_1_slide.s1_background);
		//var img_slide = JSON.parse(request.responseText);
		//console.log(img_slide);
		
		var output = "";
		output += section_1.style.backgroundImage = "url('images/main_page/sec_1_slide/s1_background.jpg')";
		section_1.innerHTML = output + "<img src='images/backgrounds/rabithole_logo.png'>";

		//var slide_1_image = request.images.sec_1_slide.s1_background;
		//section_1.style.backgroundImage = "url('images/main_page/sec_1_slide/s1_background.jpg')";
	}
};
request.send();


/*
$(document).ready(function() {

$.getJSON('http://www.rabithole.com/json/images.json', function(slide) {
	console.log("Hello World!");

	var output = "";
	output += section_1.style.backgroundImage = "url('images/main_page/sec_1_slide/s1_background.jpg')";
	section_1.innerHTML = output + "<img src='images/backgrounds/rabithole_logo.png'>";
	}); 
});	
*/		

		