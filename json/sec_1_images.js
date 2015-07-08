
var request;
/* This is for older browser compatability */

if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObect("Microsoft.XMLHTTP");
}
//var section_1 = document.getElementById("section_1");

request.open('GET', 'json/images.json', true);
request.onreadystatechange = function() {
	if((request.status === 200) && (request.readyState === 4)) {
		console.log(request);
		console.log(request.responseText);
		//console.log(request.slide.sec_1_slide.s1_background);
		var img =  JSON.parse(request.responseText);
		console.log(img[0]);

		for(i = 0; i < img.length; i++) {
				var output = "";
				output += section_1.style.backgroundImage = "url('" + img.url[i] + "')";
				section_1.innerHTML = output + "<img src='images/backgrounds/rabithole_logo.png'><br>";
				section_2.innerHTML = "<h1>Hello World!</h1><br>" + "<h5>Here I Come</h5>";


			}

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

		